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
  constructor(private fb: FormBuilder, private SharedService: SharedService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.formResponse = null;
      const email = this.contactForm.get('email')!.value;
      this.SharedService.sendEmail(email).subscribe(
        (response) => {
          this.formResponse = 'success';
          this.isLoading = false;
          this.clearForm();
        },
        (error) => {
          this.formResponse = 'error';
          this.isLoading = false;
        }
      );
    }
  }
  clearForm() {
    this.contactForm.reset();
  }
}
