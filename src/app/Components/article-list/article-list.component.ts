import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../Services/info.service'
import { Article } from '../../Models/Article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  private articles: Article[];

  private FilterTitulo: string = "";
  private FilterAutor: string = "";
  private FilterCategoria: string = "";

  ngOnInit() {
    this.filter();
  }

  filter() {
    this.infoService.getArticles(this.FilterAutor,this.FilterTitulo,this.FilterCategoria).then(r => {
      this.articles = r;
    });
  }

  clean() {
    this.FilterAutor = "";
    this.FilterCategoria = "";
    this.FilterTitulo = "";

    this.filter();
  }

}
