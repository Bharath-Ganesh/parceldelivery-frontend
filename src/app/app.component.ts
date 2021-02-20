import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'courier';

 

  constructor() { }

  isLogged:boolean;

 

  ngOnInit(): void {
    this.isLogged=true;
    
  }

  
}
