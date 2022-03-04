import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CrudDataService } from './crud-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mini-project';
  logoimg = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  constructor(public service:CrudDataService) { }
  ngOnInit() {
  }

  logout(){
    this.service.logout();
    // window.location.reload();
  }
}
