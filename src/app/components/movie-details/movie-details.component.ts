import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute){}

  movieDetailsResults:any;
  movieVideoResult:any;
  movieCastResult:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let getParamId = this.router.snapshot.paramMap.get('id')
    console.log(getParamId,'param id');

    this.getMovie(getParamId);
    this.getMovieVideo(getParamId);
    this.getMovieCast(getParamId)

  }

  getMovie(id:any){
    this.service.movieDetailsApiData(id).subscribe(data =>{
      console.log(data,'movie details');
      this.movieDetailsResults = data;
    })
  }

  getMovieVideo(id:any){
    this.service.movieVideoApiData(id).subscribe(data =>{
      console.log(data, '')
      data.results.forEach((element:any) => {
        if (element.type = 'Tr') {
          this.movieVideoResult = element.key;
        }
      });
     
    })
  }

  getMovieCast(id:any){
    this.service.movieCastApiData(id).subscribe(data =>{
      console.log(data, '')
      this.movieCastResult = data.cast;
    })
  }
}
