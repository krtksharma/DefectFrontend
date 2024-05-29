import { Component } from '@angular/core';
 import { AuthService } from '../services/auth.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbarComponent {
  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.logout(); // Call to AuthService's logout method
  }
}