import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title = 'myApplication';
  childData!: string;
  isAvailable = false;
  errorMessages = "Loading ...";
  searchQuery = '';
  searchResults = '';
  pages: any = [];
  total_pages!: number;
  load=true;
  f!: number;

  maxpage = 38185;
  disabling: boolean=false;
  receiveData(data: any) {
    this.childData = data;
  }
  movies: any[] = [];
  constructor(private service: ServiceService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.f = this.route.snapshot.params['id'];
    console.log(this.f);

    this.navigateToPage(this.f);
    
  }
  getImageUrl(data: any) {
    return this.service.getImage(data);
  }


  searchMovies(data: any) {
    return this.service.search(data).subscribe((detail: any) => {
      this.movies = detail.results;

    })
  }

  next() {
    this.f++;
    this.navigateToPage(this.f);

    
  }
  prev() {
    if (this.f > 3) {
      this.f--;
      this.navigateToPage(this.f);
    }
    else{
      this.disabling=true;
    }
  }
  navigateToPage(id: any) {
    this.router.navigate(['page', id]);
    this.pagess();

  }

  pagess() {
    this.service.getAllMovies(this.f).subscribe((data: any) => {
      this.movies = data.results;
      this.pages = data.page;
      this.total_pages = data.total_pages;
      this.load=false;

    },
      (err: any) => {
        this.errorMessages = "server not available now please retry later";
      })
  }

  reload() {
      window.location.reload();
    }


}
