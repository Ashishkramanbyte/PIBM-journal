import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitYourArticleComponent } from './submit-your-article.component';

describe('SubmitYourArticleComponent', () => {
  let component: SubmitYourArticleComponent;
  let fixture: ComponentFixture<SubmitYourArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitYourArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitYourArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
