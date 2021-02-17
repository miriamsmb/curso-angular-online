import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numero = 300;
  favoriteColor = 'Azul';
  novoTitulo = 'Olá, mundo!';
  initialValue = 'Digite aqui';
  constructor() {
    }

    eventoRecebido($event: any) {
      console.log('AppComponent: Evento recebido!', $event);
  }
    
  }
