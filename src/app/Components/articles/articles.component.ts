import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ArticleI } from '../../model/article.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // Definimos un array para almacenar los articulos 
  articles: ArticleI[];

  // Inyectamos el servicio creado en el constructor
  constructor(private ArticlesSvc: ArticlesService) { }

  ngOnInit(): void {
    this.ArticlesSvc.getAllArticles().subscribe(
      data => this.articles = data
    )
  }

}
