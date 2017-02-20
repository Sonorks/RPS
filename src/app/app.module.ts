import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { PreguntaService } from './pregunta/pregunta.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PreguntaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PreguntaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
