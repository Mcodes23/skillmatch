import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form using method chaining for cleaner code
    this.signupForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        userType: ['', Validators.required],
        termsAccepted: [false, Validators.requiredTrue],
      },
      { validators: this.passwordMatchValidator } // Custom validator for password matching
    );
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      // Store the user role securely in sessionStorage
      sessionStorage.setItem('userRole', formData.userType);

      console.log('Form Submitted:', formData);

      // Redirect to the login page
      this.router.navigate(['/login']).catch((err) => {
        console.error('Navigation error to login page:', err);
      });
    } else {
      this.signupForm.markAllAsTouched(); // Show validation errors
    }
  }

  // Optional getters for cleaner template access
  get fullName() {
    return this.signupForm.get('fullName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
