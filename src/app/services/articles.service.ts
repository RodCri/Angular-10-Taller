import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleI } from '../model/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  // Definimos un atributo con la url a consultar
  private url = 'https://dev.to/api/articles';

  // Inyectamos la dependencia HttpClient
  constructor(private http: HttpClient) { }

  // creamos la funcion que nos permitira traer todos los articulos 
  getAllArticles(): Observable<ArticleI[]>{
    return this.http.get<ArticleI[]>(this.url);
  }
}
