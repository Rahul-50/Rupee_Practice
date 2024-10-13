// import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // constructor(private router: Router,private http:HttpClient) { }
  constructor(private router: Router) { }
  onlogout() {
    debugger;
    sessionStorage.removeItem('userdata');
    this.router.navigateByUrl('/login');
  }
  oncareer() {
    debugger;
    window.open('https://careers.rupeeseed.com/jobs/Careers', '_blank'); // Opens in a new tab
  }
}
