import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contactForm: FormGroup;
  formResponse: string | null = null;
  isLoading = false;
  countries!: any[];
  
  constructor(private fb: FormBuilder, private SharedService: SharedService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      country:['']
    });
  }

  ngOnInit(): void {
    this.SharedService.getCountries().subscribe((data:any) => {
      console.log(data)
      this.countries = data;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const formData = new FormData();
      const { value } = this.contactForm;
      for (const key in value) {
        formData.append(key, value[key]);
      }
  
      this.SharedService.sendForm(formData).subscribe(
        (response) => {
          this.loadSpinner(response);
        },
        (error) => {
          this.loadSpinner(error)
        }
      );
    }
  }

  loadSpinner(e:any){
    if (e.status === 200) {
      this.formResponse = 'success';
      this.isLoading = false;
      this.clearForm();
    } else {
      this.formResponse = 'error';
      this.isLoading = false;
    }
  }
  
  
  
  clearForm() {
    this.contactForm.reset();
  }
}