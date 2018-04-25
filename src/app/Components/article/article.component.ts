import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../../Models/Article'
import { Comment } from '../../Models/Comment'

import { InfoService } from '../../Services/info.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private infoService: InfoService) { }

  private article = new Article;
  private comments = new Array<Comment>();
  private newComment = new Comment();
  private idArticle = 0;

  ngOnInit() {
    this.idArticle = +this.route.snapshot.paramMap.get('id');
    this.infoService.getArticle(this.idArticle)
      .then(r => {
        this.article = r;
      });

    this.infoService.getComments(this.idArticle).then(r => {
      this.comments = r;
    });
  }

  saveComment() {
    this.newComment.artigoId = this.idArticle
    this.infoService.saveComment(this.newComment).then(r => {
      if (r) {
        this.newComment = new Comment();
        this.infoService.getComments(this.idArticle).then(r => {
          this.comments = r;
        });
      }
    });
  }
}
