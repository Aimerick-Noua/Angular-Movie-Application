import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
    this.details();
    this.movies();
  }
  movieDetails: any = [];
  play=false;
  videos:any = [];
  load=true;
  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  details() {
    let id = this.route.snapshot.params['id'];

    this.service.getMoviesById(id).subscribe((data)=>{
      this.movieDetails = data;
      console.log(this.movieDetails);
      this.load=false;
    },
    (err:Error)=>{
      const errorMessage = err.message;
    })
  }
  movies(){
    let id = this.route.snapshot.params['id'];
    this.videos = this.service.fetchVideos(id);
    console.log(this.videos);
    console.log(id);
    this.service.fetchVideos(id).subscribe((response: any) => {
      this.videos = response.results;
      console.log(this.videos);
      
    });

    
  }
    getImageUrl(data:any){
      return this.service.getImage(data);
  }

  getScoreTransform(score:any): string {
    const rotateDegrees = (score / 100) * 360;
    return `rotate(${rotateDegrees}deg)`;
  }
  playVideo(){
    this.play=true;
    }

}