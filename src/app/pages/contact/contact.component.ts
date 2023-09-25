import { Component,OnInit  } from '@angular/core';
import { ApiService } from './Service/Contact.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Enquery } from './Model/LocationResponse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit{
  countries:any=[];
  //selectedCountry: any = null;
  states: any[] = [];
  city: any[] = [];
  EnqueryForm!: FormGroup;
  submitted = false;
  enqueryModel: any;
  
  

  constructor(private apiService: ApiService,private router: Router) { }
 
ngOnInit(): void {
  this.EnqueryForm=new FormGroup({
    //FullName: new FormControl(''), 
    
    name:new FormControl('', Validators.required),
    authorId:new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$')]),
    mobileNo:new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    country:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    city:new FormControl('', Validators.required),
    university:new FormControl(''),
    department:new FormControl(''),
    subject:new FormControl(''),
    message:new FormControl('', Validators.required),
    title:new FormControl(''),
    scriptId:new FormControl('')

  });
   
 this.selectedcountry();
}
get f() { return this.EnqueryForm.controls; }
onSubmit(): void {
{
  debugger;
  if (this.EnqueryForm.invalid) {
    return; 
  }
   
  this.apiService.SubmitEnquery(this.EnqueryForm.value).subscribe(data => {
    this.countries=data;
  this.submitted = true;
  this.router.navigate(['/thank-you']);
})
  
}
}
selectedcountry()
{
  debugger;
  this.apiService.getCoutrylist().subscribe(data => {
    this.countries=data;
   console.log('Country List:', this.countries);
   
 })
}
 selectedState(event: any): void {
  debugger;
  const countryId = event.target.value;
    
      this.apiService.getStatesByCountry(countryId).subscribe(data => {
        console.log(data);
        this.states=data;
      });
    }
    selectedCity(event: any): void {
      debugger;
      const stateId = event.target.value;
        
          this.apiService.getcityBystate(stateId).subscribe(data => {
            console.log(data);
            this.city=data;
          });
        }

    }




