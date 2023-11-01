import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../animation';

@Component({
  selector: 'app-forgot-credentials',
  templateUrl: './forgot-credentials.component.html',
  styleUrls: ['./forgot-credentials.component.css'],
  animations: [slideInAnimation],
})
export class ForgotCredentialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
