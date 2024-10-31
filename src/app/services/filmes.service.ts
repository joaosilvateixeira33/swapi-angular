import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnAPI } from 'src/interfaces/return-api.interface';
import { Filme } from 'src/interfaces/filme.interface';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  private readonly API_URL = 'https://swapi.dev/api/films';

  constructor(private http: HttpClient) {}

  getFilmes(): Observable<ReturnAPI<Filme>> {
    return this.http.get<ReturnAPI<Filme>>(this.API_URL);
  }
}