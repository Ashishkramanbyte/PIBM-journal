import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchivesComponent } from './pages/archives/archives.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { SubmitYourArticleComponent } from './pages/submit-your-article/submit-your-article.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { HomeModule } from './pages/home/home.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ArchivesComponent,
    IndexPageComponent,
    IndexPageComponent,
    SubmitYourArticleComponent,
    ContactComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserAnimationsModule,
    HomeModule,
    NgbCollapseModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,

    
    // NgbModule.forRoot()
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }
