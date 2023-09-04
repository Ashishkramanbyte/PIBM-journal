import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent implements OnInit {
  ContactForm!: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.ContactForm = new FormGroup({
      
    });
  }

  onSubmit() {
    debugger;
    this.submitted = true;
    console.log('Form submitted successfully');
    console.log('Name:', this.ContactForm.value.name);
  }
}

