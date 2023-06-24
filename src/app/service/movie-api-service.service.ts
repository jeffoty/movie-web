import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = 'https://api.themoviedb.org/3';
  apiKey = '439e8a1e870ca883607120eee4d94815';

  // bannerapi data
  bannerApiData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`);
  }

  //trending movie api data
  trendingMovieApiData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  //movie search
  getSearchMovie(data:any):Observable <any> {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

  //movie details api data
  movieDetailsApiData(data:any):Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}`);
  }

  //movie video api data
  movieVideoApiData(data:any):Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`);
  }

  //movie cast
  movieCastApiData(data:any):Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`);
  }

  //action movies
  getActionMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }

  //advennture movies
  getAdventureMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }

  //animation movies
  getAnimationMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  }

  //comedy movies
  getComedyMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }

  //documentary movies
  getDocumentaryMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }

  //fiction movies
  getFictionMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
  }

  //thriller movies
  getThrillerMovies():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  }
}
