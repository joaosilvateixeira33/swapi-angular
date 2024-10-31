import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private jsonUrl='assets/films.json';

  constructor(private http: HttpClient){}

  getFilms(): Observable<any>{
    return this.http.get<any>(this.jsonUrl);
  }
}
