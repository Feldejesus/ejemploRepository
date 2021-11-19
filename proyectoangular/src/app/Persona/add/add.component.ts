import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/Service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  persona:Persona = new Persona();


  constructor(private router:Router, private service:ServiceService) { }
  

  ngOnInit() {
  }

  modelPersona = new Persona();

  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agrego una nueva persona");
      this.router.navigate(["listar"]);
    })
  }
}
