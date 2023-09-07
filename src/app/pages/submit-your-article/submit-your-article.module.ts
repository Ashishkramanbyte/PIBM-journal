import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from '../routing';
import { RouterModule, Routes } from '@angular/router';
import { SubmitYourArticleComponent } from './submit-your-article.component';
import { AuthorGuidelinesComponent } from './author-guidelines/author-guidelines.component';

const routes: Routes = [
  {
    path: 'SubmitYourArticle',
    component: SubmitYourArticleComponent,
    children:Routing
  },
];

@NgModule({
  declarations: [
    AuthorGuidelinesComponent
  ], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SubmitYourArticleModule { }
