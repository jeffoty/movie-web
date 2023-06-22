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
  actionMovieResult: any=[];
  adventureMovieResult: any=[];
  animationMovieResult: any=[];
  comedyMovieResult: any=[];
  documentaryMovieResult: any=[];
  fictionMovieResult: any=[];
  thrillerMovieResult: any=[];

  constructor(private service:MovieApiServiceService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.bannerData();
    this.trendingMovieData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.fictionMovie();
    this.thrillerMovie();
  }

  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe((data) =>{
      // console.log(data, 'bannerdata#');
      this.bannerResult=data.results;
    })
  }

  // trending movie data
  trendingMovieData(){
    this.service.trendingMovieApiData().subscribe((data) =>{
      // console.log(data, "trendingMovies#");
      this.trendingMovieResult=data.results;
    });
  } 

  //action
  actionMovie(){
    this.service.getActionMovies().subscribe((data) =>{
      // console.log(data, "action#");
      this.actionMovieResult = data.results;
    })
  }

  //adventure
  adventureMovie(){
    this.service.getAdventureMovies().subscribe((data) =>{
      // console.log(data, "adventure#");
      this.adventureMovieResult = data.results;
    })
  }

  //animtion
  animationMovie(){
    this.service.getAnimationMovies().subscribe((data) =>{
      // console.log(data, "animation#");
      this.animationMovieResult = data.results;
    })
  }

  //comedy
  comedyMovie(){
    this.service.getComedyMovies().subscribe((data) =>{
      // console.log(data, "comedy#");
      this.comedyMovieResult = data.results;
    })
  }

  //documentary
  documentaryMovie(){
    this.service.getDocumentaryMovies().subscribe((data) =>{
      // console.log(data, "documentary#");
      this.documentaryMovieResult = data.results;
    })
  }

  //fiction
  fictionMovie(){
    this.service.getFictionMovies().subscribe((data) =>{
      // console.log(data, "fiction#");
      this.fictionMovieResult = data.results;
    })
  }

  //thriller
  thrillerMovie(){
    this.service.getThrillerMovies().subscribe((data) =>{
      // console.log(data, "thriller#");
      this.thrillerMovieResult = data.results;
    })
  }
}
