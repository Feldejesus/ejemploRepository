import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoangular';


  constructor(private router:Router){}

  listar(){
    this.router.navigate(["listar"]);
  }
  add(){
    this.router.navigate(["add"]);
  }
}
