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
  // UsernameInput: any;
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
    } else {
      alert('Please Enter Username and password correctly!');
    }
  }
  registerUser() {
    debugger;
    const userObj = {
      Username: this.Username,
      password: this.password,
    };
    debugger;
    if (this.Username && this.password && this.confirmPassword) { // Check if fields are not null or empty
      if (this.password === this.confirmPassword) {
        const userObj = {
          Username: this.Username,
          password: this.password,
          confirmPassword: this.confirmPassword
        };

        const userbojdata = JSON.stringify(userObj);
        sessionStorage.setItem('userdata', userbojdata);
        // Optionally navigate to the login page
        // this.router.navigateByUrl('/login');
        this.isLoginMode = !this.isLoginMode; // Toggle to login mode
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please fill in all fields!'); // Alert for null or empty values
    }



  }



}
