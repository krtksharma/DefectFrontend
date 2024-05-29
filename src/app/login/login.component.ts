import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
 
  constructor(public authService: AuthService) {}
 
  login(): void {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.authService.errorMessage = 'Username and password are required.';
      return;
    }
    this.authService.login(this.username, this.password);
  }
}