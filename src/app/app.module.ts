import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppComponent } from './app.component';
import { ArticleListComponent } from './Components/article-list/article-list.component';

import { InfoService } from './Services/info.service';
import { ArticleComponent } from './Components/article/article.component';
import { EditArticleComponent } from './Components/edit-article/edit-article.component'

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    EditArticleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    InfoService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
