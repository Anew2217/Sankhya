import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from '../Components/article-list/article-list.component';
import { ArticleComponent } from '../Components/article/article.component';
import { EditArticleComponent } from '../Components/edit-article/edit-article.component';

const routes: Routes = [
  {path: '', redirectTo: '/ArticleList', pathMatch: 'full'},
  {path: 'ArticleList', component: ArticleListComponent},
  {path: 'Article/:id', component: ArticleComponent},
  {path: 'EditArticle/:id', component: EditArticleComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
