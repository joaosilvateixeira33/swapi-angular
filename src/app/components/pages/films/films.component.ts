import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {

  filmes: any[] = [];

  constructor(private filmesService: FilmeService) {}

  ngOnInit(): void {
    this.filmesService.getFilmes().subscribe({
      next: (response) => {
        this.filmes = response.results;
      },
      error: (err) => {
        console.error('Erro ao buscar filmes:', err);
      }
    });
  }

}
