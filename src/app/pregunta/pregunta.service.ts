import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';
import { IPregunta } from './pregunta';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class PreguntaService {

  private _preguntasUrl = './api/preguntas/preguntas.json';

  constructor(private _http: Http) { }

  getPreguntas():Observable<IPregunta[]>{
        return this._http.get(this._preguntasUrl)
            .map((response: Response) => <IPregunta[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

  getPregunta(id: number): Observable<IPregunta> {
      return this.getPreguntas()
          .map((products: IPregunta[]) => products.find(p => p.preguntaId === id));
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
  

}
