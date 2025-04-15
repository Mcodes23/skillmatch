import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-seeker-dashboard',
  templateUrl: './job-seeker-dashboard.component.html',
  styleUrls: ['./job-seeker-dashboard.component.css'],
  imports: [RouterOutlet, CommonModule],
  standalone: true,
})
export class JobSeekerDashboardComponent {
  constructor(private router: Router) {}

  // Logout functionality
  logout() {
    localStorage.clear(); // Clear storage or tokens
    this.router.navigate(['/login']); // Redirect to login page
  }

  // Upload CV functionality
  triggerCVUpload() {
    const fileInput = document.getElementById('cvUpload') as HTMLElement;
    fileInput.click();
  }

  onCVUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log('CV uploaded:', file);
    }
  }

  // Portfolio Modal State
  showModal = false;

  openPortfolioModal() {
    this.showModal = true;
    console.log('Portfolio modal opened');
  }

  closePortfolioModal() {
    this.showModal = false;
  }

  submitPortfolioUpdate() {
    console.log('Portfolio updated successfully');
    this.closePortfolioModal();
  }

  // Complete Profile Modal State
  profileModal = false;

  openCompleteProfileModal() {
    this.profileModal = true;
    console.log('Complete Profile modal opened');
  }

  closeCompleteProfileModal() {
    this.profileModal = false;
  }

  submitCompleteProfile() {
    console.log('Profile completed successfully');
    this.updateProfileCompletion(); // Dynamically update completion percentage
    this.closeCompleteProfileModal();
  }

  // Profile Completion Logic
  profileCompletion = 75;

  updateProfileCompletion() {
    // Update the profile completion based on user actions
    this.profileCompletion = 0; // Reset progress
    if (/* Work Experience Added */ true) this.profileCompletion += 25;
    if (/* Portfolio Uploaded */ true) this.profileCompletion += 50;
    if (/* Skills Assessment Completed */ true) this.profileCompletion += 25;

    console.log('Profile completion updated:', this.profileCompletion + '%');
  }

  // Recommended Jobs Data
  recommendedJobs = [
    {
      title: 'Senior Developer',
      company: 'Google',
      match: 90,
      image: 'https://cdn-icons-png.flaticon.com/512/281/281764.png',
    },
    {
      title: 'UX Designer',
      company: 'Apple',
      match: 91,
      image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    },
    {
      title: 'Product Manager',
      company: 'Microsoft',
      match: 92,
      image: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
    },
    {
      title: 'Data Scientist',
      company: 'Amazon',
      match: 93,
      image: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
    },
    {
      title: 'DevOps Engineer',
      company: 'Meta',
      match: 94,
      image: 'https://cdn-icons-png.flaticon.com/512/732/732244.png',
    },
    {
      title: 'Frontend Developer',
      company: 'Netflix',
      match: 95,
      image: 'https://cdn-icons-png.flaticon.com/512/732/732233.png',
    },
  ];

  // Notifications Data
  notifications = [
    { message: 'Your application was viewed by Google', time: '2 hours ago' },
    { message: 'New job match: Senior Developer at Meta', time: '2 hours ago' },
    { message: 'Profile strength increased to 75%', time: '2 hours ago' },
    { message: 'Microsoft saved your profile', time: '2 hours ago' },
    { message: 'New message from recruiter', time: '2 hours ago' },
  ];

  // Career Paths Data
  careerPaths = [
    {
      title: 'Full-Stack Development',
      description: 'Master both frontend and backend technologies',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      description: 'Create beautiful and functional user interfaces',
      icon: '🎨',
    },
    {
      title: 'Data Science',
      description: 'Analyze and interpret complex data sets',
      icon: '📊',
    },
  ];

  // Quick Links Data
  quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms of Service', path: '/terms' },
  ];

  // Social Links Data
  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'GitHub', icon: 'github', url: '#' },
  ];

  // Current Year for Footer
  currentYear = new Date().getFullYear();
}
