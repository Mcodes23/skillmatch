import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet],
})
export class JobSeekerProfileComponent {
  constructor(private router: Router) {}

  // Logout functionality
  logout() {
    localStorage.clear(); // Clear storage or tokens
    this.router.navigate(['/login']); // Redirect to login page
  }
  userData = {
    name: 'John Doe',
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    available: true,
    photoUrl: 'assets/profile-photo.jpg',
    skills: {
      technical: [
        'React',
        'TypeScript',
        'Node.js',
        'Python',
        'AWS',
        'Docker',
        'GraphQL',
        'PostgreSQL',
      ],
      soft: [
        'Team Leadership',
        'Project Management',
        'Problem Solving',
        'Communication',
      ],
      languages: [
        { name: 'English', level: 'Native' },
        { name: 'Spanish', level: 'Professional' },
        { name: 'Mandarin', level: 'Basic' },
      ],
    },
    experience: [
      {
        company: 'Tech Solutions Inc',
        logo: 'assets/tech-solutions-logo.png',
        title: 'Senior Full Stack Developer',
        period: 'Jan 2021 - Present',
        location: 'San Francisco, CA',
        description:
          'Led development of enterprise-scale applications using React and Node.js. Managed a team of 5 developers and implemented CI/CD pipelines.',
      },
      {
        company: 'Innovation Labs',
        logo: 'assets/innovation-labs-logo.png',
        title: 'Full Stack Developer',
        period: 'Mar 2018 - Dec 2020',
        location: 'Boston, MA',
        description:
          'Developed and maintained multiple client applications. Implemented microservices architecture and improved system performance by 40%.',
      },
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        image: 'assets/ecommerce-project.jpg',
        description:
          'A modern e-commerce platform built with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB'],
        links: {
          github: true,
          demo: true,
        },
      },
      {
        name: 'AI Task Manager',
        image: 'assets/task-manager.jpg',
        description: 'Task management app with AI-powered prioritization',
        technologies: ['Python', 'TensorFlow', 'React'],
        links: {
          github: true,
          demo: true,
        },
      },
      {
        name: 'Healthcare Dashboard',
        image: 'assets/healthcare-dashboard.jpg',
        description: 'Analytics dashboard for healthcare providers',
        technologies: ['TypeScript', 'D3.js', 'AWS'],
        links: {
          github: true,
          demo: true,
        },
      },
    ],
    documents: [
      {
        name: 'John_Doe_CV_2024.pdf',
        updated: 'Jan 15, 2024',
        size: '2.4 MB',
      },
      {
        name: 'Portfolio_Technical.pdf',
        updated: 'Dec 20, 2023',
        size: '3.1 MB',
      },
    ],
  };
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
