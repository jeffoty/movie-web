import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bannerResult: any=[];
  trendingMovieResult: any=[];

  constructor(private service:MovieApiServiceService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.bannerData();
    this.trendingMovieData();
  }

  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe((data) =>{
      console.log(data, 'bannerdata#');
      this.bannerResult=data.results;
    })
  }

  // trending movie data
  trendingMovieData(){
    this.service.trendingMovieApiData().subscribe((data) =>{
      console.log(data, "trendingMovies#");
      this.trendingMovieResult=data.results;
    });
  } 
}
