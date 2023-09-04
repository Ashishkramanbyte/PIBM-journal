import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faqs',
  standalone: true,
	imports: [NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  providers: [NgbAccordionConfig],  
})
export class FAQsComponent {
  constructor(config: NgbAccordionConfig) {
		// customize default values of accordions used by this component tree
		config.closeOthers = true;
	}
}
