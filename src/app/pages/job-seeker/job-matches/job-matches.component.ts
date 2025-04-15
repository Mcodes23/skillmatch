import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  logo: string;
}

@Component({
  selector: 'app-job-matches',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './job-matches.component.html',
  styleUrls: ['./job-matches.component.css'],
})
export class JobMatchesComponent implements OnInit {
  constructor(private router: Router) {}

  // Logout functionality
  logout() {
    localStorage.clear(); // Clear storage or tokens
    this.router.navigate(['/login']); // Redirect to login page
  }
  isChatVisible: boolean = true;
  userMessage: boolean = true;
  newMessage: string = '';

  featuredJobs: Job[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      logo: '/assets/images/techcorp-logo.png',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Studios',
      location: 'New York, NY',
      type: 'Remote',
      logo: '/assets/images/creative-studios-logo.png',
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Austin, TX',
      type: 'Hybrid',
      logo: '/assets/images/innovation-labs-logo.png',
    },
  ];

  ngOnInit(): void {
    // Initialize component
  }

  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible;
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // In a real application, we would process the message here
      // and potentially make API calls to get job recommendations
      console.log('Message sent:', this.newMessage);
      this.newMessage = '';
    }
  }

  applyForJob(jobId: number): void {
    console.log(`Applying for job with ID: ${jobId}`);
    // In a real application, this would navigate to an application form
    // or open a modal with the application process
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
