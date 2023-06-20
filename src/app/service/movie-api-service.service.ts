import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = 'http://api.themoviedb.org/3';
  apiKey = '439e8a1e870ca883607120eee4d94815'

  // bannerapi data
  bannerApiData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`)
  }

  //trending movie api data
  trendingMovieApiData():Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`)
  }

  //movie search
  getSearchMovie(data:any):Observable <any> {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
  }

  //movie details api data
  movieDetailsApiData(data:any):Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}`)
  }

  //movie video api data
  movieVideoApiData(data:any):Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  //movie cast
  movieCastApiData(data:any):Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }
}
