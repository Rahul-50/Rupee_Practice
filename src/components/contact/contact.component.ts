import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactobj: any = [{
    username: '',
    email: '',
    msg: ''
  }

  ]
  onsubmit() {
    console.log('asdfghnm')
    debugger;
    const localdata = localStorage.getItem('usermsg');
    if (localdata !== null) {
      localStorage.removeItem('usermsg');
    }
    localStorage.setItem('usermsg', JSON.stringify(this.contactobj));
  }
}
