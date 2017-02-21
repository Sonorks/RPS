import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Output() mostrarDatos = new EventEmitter

  /*newDataForm: FormGroup
  cedula: FormControl
  usuario: FormControl
  programa: FormControl
  edad: FormControl
  genero: FormControl*/
  
  constructor() { }


  ngOnInit(){
      /*this.cedula = new FormControl('')
      this.usuario = new FormControl('')
      this.programa = new FormControl('')
      this.edad = new FormControl('')
      this.genero = new FormControl('')

      this.newDataForm = new FormGroup({
          cedula: this.cedula,
          usuario: this.usuario,
          programa: this.programa,
          edad: this.edad,
          genero: this.genero
      })*/
  }

  guardar(){
    this.mostrarDatos.emit()
  }

}
