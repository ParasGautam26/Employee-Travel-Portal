import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animation';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  animations: [fadeInAnimation],
})
export class UserRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Handle form submission here
    console.log('Form submitted');
  }

}
