import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  standalone: true,
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Retrieve role from sessionStorage
      const userRole = sessionStorage.getItem('userRole');
      if (!userRole) {
        console.error(
          'No role stored in sessionStorage. Redirecting to login.'
        );
        this.router.navigate(['/login']);
        return;
      }

      console.log('Login successful:', { email, userRole });

      // Redirect based on role
      const dashboardRoute =
        userRole === 'jobSeeker'
          ? '/job-seeker-dashboard'
          : userRole === 'employer'
          ? '/recruiter-dashboard'
          : userRole === 'admin'
          ? '/admin-dashboard'
          : '/unknown-route'; // Fallback for invalid role

      this.router.navigate([dashboardRoute]).catch((err) => {
        console.error(`Navigation error to ${dashboardRoute}:`, err);
      });
    } else {
      this.loginForm.markAllAsTouched(); // Show validation errors
    }
  }

  // Getter methods for cleaner template access
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
