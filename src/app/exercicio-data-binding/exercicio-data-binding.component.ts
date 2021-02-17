import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

    @Input() valor = 0;
    @Input() color!: string;
    @Output() clicado = new EventEmitter();

    initialValue = "Digite algo";
    valorDoInput = '';

    valorContador = 10;
    
    imageURL = 'https://lh3.googleusercontent.com/0duU9MDbWKmwuDV1KjMDrm-JdI61fDrUtShjkxiP4wThU96rMp2i34NLYv2SWO77V5pxliNvX5OF1ws2hHEgNFKw';

    onClick($event: any) {
      console.log('clicou!', $event);
    }

    digitouAlgo($event: any) {
      this.valorDoInput = $event.target.value;
      console.log($event);
    }

    passouMouse() {
      console.log('Alguém passou o Mouse');
    }

    onClickBotaoEmissor(_$event: any) {
      console.log('Devo emitir informações para o componente pai');
      this.clicado.emit(_$event);
    }
    
  constructor() { 

  }

  ngOnInit(): void {
  }

}
