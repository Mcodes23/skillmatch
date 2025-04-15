import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { JobSeekerDashboardComponent } from './pages/job-seeker/job-seeker-dashboard/job-seeker-dashboard.component';
import { RecruiterDashboardComponent } from './pages/job-recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { JobsPageComponent } from './pages/job-seeker/jobs-page/jobs-page.component';
import { JobSeekerProfileComponent } from './pages/job-seeker/job-seeker-profile/job-seeker-profile.component';
import { JobMatchesComponent } from './pages/job-seeker/job-matches/job-matches.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'job-seeker-dashboard', component: JobSeekerDashboardComponent },
  { path: 'recruiter-dashboard', component: RecruiterDashboardComponent },
  { path: 'jobs-page', component: JobsPageComponent },
  { path: 'job-seeker-profile', component: JobSeekerProfileComponent },
  {path: 'job-matches', component: JobMatchesComponent},
  { path: '**', redirectTo: '' },
];
