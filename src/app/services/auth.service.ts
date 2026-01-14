import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUser: any = null;
  public errorMessage: string = '';
  public successMessage: string = '';
 
  constructor(private http: HttpClient, private router: Router) {}
 
  login(username: string, password: string): void {
    this.http.post<any>('https://defectmanagement-env.eba-jggmxtc5.ap-south-1.elasticbeanstalk.com/api/users/login', { userName: username, password: password }).subscribe(
      response => {
        if (response && response.role) {
          this.isAuthenticated = true;
          this.currentUser = { username, role: response.role };
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          this.successMessage = 'Login successful!';
          setTimeout(() => {
            this.successMessage = '';
            this.errorMessage = '';
            this.router.navigate(['/dashboard']);
          }, 1000); // Redirect after 1 second
        } else {
          console.error('Invalid response from server:', response);
          this.errorMessage = 'Invalid username or password.';
        }
      },
      error => {
        console.error('Error during login:', error);
        this.errorMessage = 'An error occurred during login. Please try again later.';
      }
    );
  }
 
  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
 
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
 
  getCurrentUser(): any {
    return this.currentUser;
  }
 
  hasAnyRole(expectedRoles: string[]): boolean {
    const currentUser = this.getCurrentUser();
    const userRole = currentUser ? currentUser.role : '';
    return expectedRoles.includes(userRole);
  }
}


