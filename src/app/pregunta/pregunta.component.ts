import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PreguntaService } from './pregunta.service';
import { IPregunta } from './pregunta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Output() cambiarPregunta = new EventEmitter
  @Output() setRespuesta = new EventEmitter


  @Input() visibilidad
  errorMessage: string;
  preguntas: IPregunta[]

  constructor(private _preguntaService: PreguntaService) { }

  ngOnInit() {
    this._preguntaService.getPreguntas()
                .subscribe(preguntas => this.preguntas = preguntas,
                           error => this.errorMessage = <any>error);
  }

  advance(opcion: string, preguntaActual: number){
    this.setRespuesta.emit({res: opcion, pregunta: preguntaActual})
    if (preguntaActual == 2 || 5 || 6){
      this.cambiarPregunta.emit({actual: preguntaActual, siguiente: 100, final: true})
    }
    if (preguntaActual == 1) {
      if (opcion == "NO") {
        this.cambiarPregunta.emit({actual: preguntaActual, siguiente: 2})
      } else {
        this.cambiarPregunta.emit({actual: preguntaActual, siguiente: 3})
      }
    }
    if (preguntaActual == 3) {
      if (opcion == "NO") {
        this.cambiarPregunta.emit({actual: preguntaActual, siguiente: 2})
      } else {
        this.cambiarPregunta.emit({actual: preguntaActual, siguiente: 4})
      }
    }
    if (preguntaActual == 4) {
      if (opcion == "NO") {
        this.cambiarPregunta.emit({actual: preguntaActual, siguiente: 5})
      } else {
        this.cambiarPregunta.emit({actual: preguntaActual, siguiente: 6})
      }
    }
  }

}
