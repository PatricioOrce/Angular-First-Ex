import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  edadUno: number = 0;
  edadDos: number = 0;
  resultadoProm: number = 0;
  resultadoSum: number = 0;
  imagen = '../assets/Pato.png';
  calcular(){
    this.resultadoProm = (this.edadUno+Number(this.edadDos))/2;
    this.resultadoSum = (this.edadUno+Number(this.edadDos));
  }
  Limpiar(){
    this.resultadoProm = 0;
    this.resultadoSum = 0;
    
  }
}
