import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  	formVisible = true;
		finalVisible = false;
		datos = null;
		visibilidad = 1;
		numeroPreguntas = 6;
		preguntas = []; //donde se guardaran las respuestas
		mostrarDatos(){
			var usuario = this.datos.usuario;
			var programa = this.datos.programa;			
			this.formVisible = false;
			this.visibilidad[1] = 1;
		}
		esVisible(pregunta){
			if (this.visibilidad[pregunta] === 0){
				return false;
			}
			else{
				return true;
			}
		}
		cambiarPregunta($event){
			this.visibilidad[$event.actual] = 0;
			if($event.siguiente=== 0){
				this.finalVisible = true;
				for(var i = 1; i<=this.numeroPreguntas; i++){
					console.log("Pregunta: "+i+" "+this.preguntas[i]);
				}
			}
			this.visibilidad[$event.siguiente] = 1;
		}
		setRespuesta($event){
			
				this.preguntas[$event.pregunta]=$event.res;
			
			console.log(this.preguntas[$event.pregunta]);
		}

}
