import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  search(data: any) {
  let url=`https://api.themoviedb.org/3/search/movie?api_key=c5b869e208e7f45fe5e8255b0e0e5560&query=${data}`; 
    return this.http.get(url);
}
  getMovieDetails(id: any) {
    return this.http.get<any>(this.BASE_URL);
  }
  getImage(data: any) {
    return this.imageURL + data;
  }
  private videos:any = [];
  private imageURL = 'https://image.tmdb.org/t/p/w500/'
  private API_KEY = 'c5b869e208e7f45fe5e8255b0e0e5560';
  private BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=c5b869e208e7f45fe5e8255b0e0e5560';

  constructor(private http:HttpClient) {}
  
    getAllMovies(value:any){
      return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=c5b869e208e7f45fe5e8255b0e0e5560&page=${value}`);
    }
   getMoviesById(id:number){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=c5b869e208e7f45fe5e8255b0e0e5560`);
  }
    fetchVideos(id:number) {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}`;
      return this.http.get(url);
  }
}
