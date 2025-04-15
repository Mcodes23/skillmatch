import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true, // assuming it’s standalone
  imports: [RouterOutlet, CommonModule, RouterModule],
})
export class LandingComponent {
  title = 'SkillMatch - AI-Powered Job Matching';

  // Navigation links
  navLinks = [
    { title: 'How It Works', path: '#how-it-works' },
    { title: 'Features', path: '#features' },
    { title: 'Testimonials', path: '#testimonials' },
    { title: 'Contact', path: '#contact' },
  ];

  // How It Works steps
  steps = [
    {
      id: '01',
      title: 'Create a Skill Profile',
      description:
        'Build your comprehensive skill profile with our AI-powered assessment tool.',
      icon: 'document',
    },
    {
      id: '02',
      title: 'AI Matches You with Jobs',
      description:
        'Our advanced AI analyzes your skills and matches you with relevant opportunities.',
      icon: 'bolt',
    },
    {
      id: '03',
      title: 'Apply Instantly & Get Hired',
      description:
        'Apply with one click and start your journey with your dream company.',
      icon: 'briefcase',
    },
  ];

  // Features
  features = [
    {
      title: 'AI-Driven Job Matching',
      description:
        'Smart algorithms that understand your unique skill set and career goals.',
      icon: 'rocket',
    },
    {
      title: 'Skill-Based Resume Parsing',
      description: 'Automated skill extraction and analysis from your resume.',
      icon: 'file-text',
    },
    {
      title: 'Instant Interview Notifications',
      description: 'Real-time alerts for interview requests and job matches.',
      icon: 'bell',
    },
    {
      title: 'Career Growth Insights',
      description:
        'Data-driven recommendations for skill development and career progression.',
      icon: 'trending-up',
    },
  ];

  // Testimonials
  testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Software Engineer',
      quote: '"SkillMatch AI helped me land a job in 2 weeks!"',
      rating: 5,
      image: 'assets/review-img1.jpg',
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager',
      quote: '"The AI matching is incredibly accurate. Found my dream job!"',
      rating: 5,
      image: 'assets/review-img2.jpg',
    },
    {
      name: 'Emily Rodriguez',
      position: 'UX Designer',
      quote: '"Best platform for finding tech jobs. Highly recommended!"',
      rating: 5,
      image: 'assets/review-img3.jpg',
    },
  ];

  // Quick Links
  quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms of Service', path: '/terms' },
  ];

  // Social Links
  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'GitHub', icon: 'github', url: '#' },
  ];

  // Current year for copyright
  currentYear = new Date().getFullYear();
}
