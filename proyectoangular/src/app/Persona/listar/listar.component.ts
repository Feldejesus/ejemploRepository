import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {

  personas:Persona[];
  
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getPersona()
    .subscribe(data=>{this.personas=data;
    })
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      alert("SU REGUISTRO FUE ELIMINADO")     
      this.personas = this.personas.filter(p => p !== persona);   
    })
  }
}
