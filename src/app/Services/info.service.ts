import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { Article } from '../Models/Article'
import { Comment } from '../Models/Comment'

@Injectable()
export class InfoService {

  constructor(private http: Http) { }

  getArticles(autor: string, titulo: string, categoria: string): Promise<any> {
    return this.http.get('http://localhost:3000/artigo?autor_like=' + autor + '&titulo_like=' + titulo + '&categoria_like=' + categoria)
      .toPromise().then(r => {
        return r.json() as Article[];
      });
  }

  getArticle(id): Promise<Article> {
    return this.http.get('http://localhost:3000/artigo/' + id)
      .toPromise().then(r => {
        return r.json() as Article;
      });
  }

  getComments(id): Promise<Comment[]> {
    return this.http.get("http://localhost:3000/comentarios?artigoId=" + id)
      .toPromise().then(r=>{
        return r.json() as Comment[];
      });
  }

  saveComment(comment):Promise<boolean>{
    return this.http.post("http://localhost:3000/comentarios",comment)
    .toPromise().then(r=>{
      return true;
    }).catch(r=>{return false});
  }

  editArticle(article: Article):Promise<boolean>{
    return this.http.put("http://localhost:3000/artigo/"+article.id,article)
    .toPromise().then(r=>{
      return true;
    }).catch(r=>{return false});
  }

  saveArticle(article: Article):Promise<boolean>{
    return this.http.post("http://localhost:3000/artigo",article)
    .toPromise().then(r=>{
      return true;
    }).catch(r=>{return false});
  }

}
