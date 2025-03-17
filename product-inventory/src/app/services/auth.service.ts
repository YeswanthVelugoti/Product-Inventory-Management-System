import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private loggedInUser: string | null = null;

  constructor(private router: Router) {}

  // Login method
  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      this.isAuthenticated = true;
      this.loggedInUser = email;
      localStorage.setItem('loggedInUser', email);
      return true;
    }
    return false;
  }

  // Logout method
  logout() {
    this.isAuthenticated = false;
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/sign-in']);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  // Get logged-in user info
  getLoggedInUser(): string | null {
    return localStorage.getItem('loggedInUser');
  }
}
