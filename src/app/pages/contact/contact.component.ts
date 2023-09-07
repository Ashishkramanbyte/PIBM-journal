import { Component,OnInit  } from '@angular/core';
import { ApiService } from './Service/Contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit{
  countries:any=[];
  selectedCountry: any = null;
  states: any[] = [];
  city: any[] = [];
  

  constructor(private apiService: ApiService) { }
 
ngOnInit(): void {
   this.apiService.getCoutrylist().subscribe(data => {
    this.countries=data;
   console.log('Country List:', this.countries);
   
 })
 //this.selectedState();
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




