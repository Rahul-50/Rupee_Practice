import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginMode = true;  // Toggle between login and register modes

  Username = '';
  password = '';
  confirmPassword = '';
  storedUser = '';
  // Used for register form
  errorMessage = '';
  isLoading = false;
  constructor(private router: Router) { }
  // router = inject(Router)

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;

  }
  onSubmit() {

    if (this.isLoginMode) {
      // Handle login
      this.loginUser();
    } else {
      // Handle registration
      this.registerUser();
    }
  }

  loginUser() {
    debugger;
    const sessiondata = sessionStorage.getItem('userdata');
    if (sessiondata) {
      const storedUser = JSON.parse(sessiondata); // Parse the JSON string to an object

      if (storedUser.Username === this.Username && storedUser.password === this.password) {
        this.router.navigateByUrl('/home');

      } else {
        alert('Invalid Credentials'); // Alert for invalid credentials
      }
    }
  }
  registerUser() {
    const userObj = {
      Username: this.Username,
      password: this.password,
    };
    debugger;
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userbojdata = JSON.stringify(userObj);
    sessionStorage.setItem('userdata', userbojdata);
    // this.router.navigateByUrl('/login');
    this.isLoginMode = !this.isLoginMode;

  }



}
