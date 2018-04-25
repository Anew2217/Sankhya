import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { InfoService } from '../../Services/info.service'
import { Article } from '../../Models/Article';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(private infoService: InfoService, private route: ActivatedRoute) { }

  private idArticle = 0;
  private article = new Article();

  private categorias = [
    { value: "FINANCEIRO", label: "Financeiro" },
    { value: "COMERCIAL", label: "Comercial" },
    { value: "JURIDICO", label: "Juridico" },
    { value: "RH", label: "RH" }
  ]

  ngOnInit() {
    this.article = new Article();
    this.idArticle = +this.route.snapshot.paramMap.get('id');
    if (this.idArticle > 0) {
      this.infoService.getArticle(this.idArticle)
        .then(r => {
          this.article = r;
        });
    }
  }

  save() {
    if (this.idArticle == 0) {
      this.infoService.saveArticle(this.article);
    } else {
      this.infoService.editArticle(this.article);
    }
  }

}
