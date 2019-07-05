import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  //propiedades
  mensaje: string = 'mensaje 1';
  valor: number = 23456;
  valor2: number=789;
  valor3: number=123;
  contador: number = 0;

  constructor() {
    console.log('hola soy el constructor')
   }

  ngOnInit() { //ngOnInit es un hook
    console.log('hola soy el hook')
  }

  //metodos:

  incrementar() {
    console.log('incrementar')
    this.contador++;
  }

  }
