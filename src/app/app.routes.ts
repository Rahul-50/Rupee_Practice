import { authGuard } from './../Core/auth.guard';
import { Routes } from '@angular/router';
import { NavbarComponent } from '../Core/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { ClientComponent } from '../components/client/client.component';
import { EventsComponent } from '../components/events/events.component';
import { OurWorkComponent } from '../components/our-work/our-work.component';
import { ContactComponent } from '../components/contact/contact.component';
import { LoginComponent } from '../Core/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent, canActivate: [authGuard] },
  {
    path: '', component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [authGuard] },
      { path: 'about', component: AboutComponent, canActivate: [authGuard] },
      { path: 'blog', component: BlogComponent, canActivate: [authGuard] },
      { path: 'client', component: ClientComponent, canActivate: [authGuard] },
      { path: 'event', component: EventsComponent, canActivate: [authGuard] },
      { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
      { path: 'ourwork', component: OurWorkComponent, canActivate: [authGuard] }
    ]

  },

];
