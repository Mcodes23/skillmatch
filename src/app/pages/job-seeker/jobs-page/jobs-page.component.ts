import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css'],
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule],
  standalone: true,
})
export class JobsPageComponent {
  constructor(private router: Router) {}

  // Logout functionality
  logout() {
    localStorage.clear(); // Clear storage or tokens
    this.router.navigate(['/login']); // Redirect to login page
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected CV:', file.name);
      // TODO: Upload or process the file here
    }
  }
  job = {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    employmentType: 'Remote',
    salary: '$120,000 - $140,000/year',
    postedDate: '3 days ago',
    description: 'Develop and maintain complex web applications...',
    responsibilities: [
      'Develop and maintain complex web applications',
      'Collaborate with designers and backend developers',
      'Optimize applications for maximum performance',
      'Write clean and efficient code',
      'Participate in code reviews and technical discussions',
    ],
    benefits: [
      { iconClass: 'fa-dollar-sign', name: 'Competitive Salary' },
      { iconClass: 'fa-heartbeat', name: 'Health Insurance' },
      { iconClass: 'fa-laptop-house', name: 'Remote Work Options' },
      { iconClass: 'fa-graduation-cap', name: 'Professional Development' },
      { iconClass: 'fa-money-bill-wave', name: '401(k) Matching' },
      { iconClass: 'fa-clock', name: 'Flexible Hours' },
    ],
    skillMatch: {
      score: 85,
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'Node.js', proficiency: 75 },
        { name: 'GraphQL', proficiency: 60 },
        { name: 'AWS', proficiency: 40 },
      ],
    },
  };

  applicationOptions = [
    {
      icon: 'fa-file-upload',
      title: 'Upload Your CV',
      description: 'PDF, DOC, DOCX (Max 5MB)',
    },
    {
      icon: 'fa-robot',
      title: 'Use AI-Enhanced Profile',
      description: 'Optimized for better matching',
    },
    {
      icon: 'fa-linkedin',
      title: 'Import from LinkedIn',
      description: 'Use your LinkedIn profile',
    },
    {
      icon: 'fa-github',
      title: 'Connect GitHub Profile',
      description: 'Showcase your code projects',
    },
  ];

  breadcrumbs = [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Jobs', path: '/jobs' },
    { title: 'Senior Frontend Developer', path: '' },
  ];

  searchQuery = '';

  search() {
    console.log('Search query:', this.searchQuery);
  }

  saveJob() {
    console.log('Job saved!');
  }

  shareJob() {
    console.log('Job shared!');
  }

  applyNow() {
    console.log('Application submitted!');
  }
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
