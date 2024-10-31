import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {

  filmes: any[] = [];

  constructor(private filmesService: FilmesService) {}

  ngOnInit():void {
    this.filmesService.getFilms().subscribe(data =>{
      this.filmes = data;
    });
  }

}
