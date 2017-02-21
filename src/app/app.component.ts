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
		visibilidad = 0;
		numeroPreguntas = 6;
		preguntas = []; //donde se guardaran las respuestas
		mostrarDatos(){
			// var cedula = 
			// var programa = this.datos.programa;			
			this.formVisible = false;
			this.visibilidad = 1;
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
			/*if($event.siguiente == 0){
				this.finalVisible = true;
				for(var i = 1; i<=this.numeroPreguntas; i++){
					if (this.preguntas[i]) {
						console.log("Pregunta: "+i+" "+this.preguntas[i]);
					}
					
				}
			}*/
			if ($event.final === true) {
				this.finalVisible = true;
			}
			this.visibilidad = $event.siguiente ;
		}
		setRespuesta($event){
			
				this.preguntas[$event.pregunta]=$event.res;
			
			console.log(this.preguntas[$event.pregunta]);
		}

}
