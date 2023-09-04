import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { Routing } from '../routing';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { AuthorsComponent } from './authors/authors.component';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { EditorialPolicyComponent } from './editorial-policy/editorial-policy.component';
// import { LeftMenuModule } from '../home/left-menu/left-menu.module';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children:Routing
  },
  
];
@NgModule({
  declarations: [
    AboutComponent,
    EditorialBoardComponent,
    AuthorsComponent,
    ReviewersComponent, 
    EditorialPolicyComponent,

  ],
  imports: [
    CommonModule,
    // LeftMenuModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AboutModule { }
