import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArchivesComponent } from './archives/archives.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { EditorialBoardComponent } from './about/editorial-board/editorial-board.component';
import { AuthorsComponent } from './about/authors/authors.component';
import { ReviewersComponent } from './about/reviewers/reviewers.component';
import { EditorialPolicyComponent } from './about/editorial-policy/editorial-policy.component';
import { SubmitYourArticleComponent } from './submit-your-article/submit-your-article.component';
import { AuthorGuidelinesComponent } from './submit-your-article/author-guidelines/author-guidelines.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LoginComponent } from '../profile/login/login.component';
import { CreateAccountComponent } from '../profile/create-account/create-account.component';

const Routing: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',                                                                                                                                                                                                                                           
        component: HomeComponent,
      },
      
    ],
  },
 
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      
    ]
  },
  {
    path: 'about/editorialboard',
    component: EditorialBoardComponent,
    children: [
      {
        path: '',                                                                                                                                                                                                                                           
        component: EditorialBoardComponent,
      },
      
    ],
  },
  {
    path: 'about/authors',
    component: AuthorsComponent,
    children: [
      {
        path: '',                                                                                                                                                                                                                                           
        component: AuthorsComponent,
      },
      
    ],
  },
  {
    path: 'about/reviewers',
    component: ReviewersComponent,
    children: [
      {
        path: '',                                                                                                                                                                                                                                           
        component: ReviewersComponent,
      },
      
    ],
  },
  {
    path: 'about/editorial-policy',
    component: EditorialPolicyComponent,
    children: [
      {
        path: '',                                                                                                                                                                                                                                           
        component: EditorialPolicyComponent,
      },
      
    ],
  },
  {
    path: 'archives',
    component: ArchivesComponent,
    children: [
      {
        path: 'archives',                                                                                                                                                                                                                                           
        component: ArchivesComponent,
      },
      
    ],
  },
  {
    path: 'index',
    component: IndexPageComponent,
    children: [
      {
        path: 'index',                                                                                                                                                                                                                                           
        component: IndexPageComponent,
      },
      
    ],
  },
  {
    path: 'SubmitYourArticle',
    component: SubmitYourArticleComponent,
    children: [
      {
        path: 'SubmitYourArticle',                                                                                                                                                                                                                                           
        component: SubmitYourArticleComponent,
      },
      
    ],
  },
  {
    path: 'SubmitYourArticle/AuthorGuidelines',
    component: AuthorGuidelinesComponent,
    children: [
      {
        path: 'SubmitYourArticle/AuthorGuidelines',                                                                                                                                                                                                                                           
        component: AuthorGuidelinesComponent,
      },
      
    ],
  },
  {
    path: 'faqs',
    component: FAQsComponent,
    children: [
      {
        path: 'faqs',                                                                                                                                                                                                                                           
        component: FAQsComponent,
      },
      
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: 'contact',                                                                                                                                                                                                                                            
        component: ContactComponent,
      },
      
    ],
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
    children: [
      {
        path: 'thank-you',                                                                                                                                                                                                                                           
        component: ThankYouComponent,
      },
      
    ],
  },
  {
    path: 'profile/login',
    component: LoginComponent,
    children: [
      {
        path: 'profile/login',                                                                                                                                                                                                                                           
        component: LoginComponent,
      },
      
    ],
  },
  {
    path: 'profile/create-account',
    component: CreateAccountComponent,
    children: [
      {
        path: 'profile/create-account',                                                                                                                                                                                                                                           
        component: CreateAccountComponent,
      },
      
    ],
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export { Routing };
