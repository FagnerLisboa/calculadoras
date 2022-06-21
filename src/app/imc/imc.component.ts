import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent implements OnInit {
  public nome!: string
  public peso!: number
  public altura!: number
  public valorIMC!: string
  public resultado!: string
  public option!: string

  constructor() {}

  ngOnInit(): void {
  }

  calcularImc() {
    if (this.altura && this.peso) {

      const valorIMC = (this.peso / (this.altura * this.altura));

      if (valorIMC < 18.5) {
        this.resultado = 'abaixo do peso.';

      } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
        this.resultado = 'com peso ideal, Parabéns!!!';

      } else if (valorIMC >= 25 && valorIMC <= 29.9) {
        this.resultado = 'levimente acima do peso.';

      } else if (valorIMC >= 30 && valorIMC <= 34.9) {
        this.resultado = 'com obesidade grau I.';

      } else if (valorIMC >= 35 && valorIMC <= 39.99) {
        this.valorIMC = 'com obsidade grau II.';

      } else {
        this.resultado = 'com obesidade grau III. Cuidado!!';
      }
      
    }
  }



  // imc() {
  //   if (this.altura && this.peso) {
  //     const valorIMC = (this.peso / (this.altura * this.altura));

  //     console.log(this.resultado)
      
  //     switch (valorIMC) {
  //       case Number(valorIMC < 18.5):
  //         this.resultado = 'abaixo do peso';
  //         break;
  //       case Number(valorIMC >= 18.5 && valorIMC <= 24.9):
  //         this.resultado = 'com peso ideal, Parabéns!!!';
  //         break;
  //       case Number(valorIMC >= 25 && valorIMC <= 29.9):
  //         this.resultado = 'levimente acima do peso.';
  //         break;
  //       case Number(valorIMC >= 30 && valorIMC <= 34.9):
  //         this.resultado = 'com obesidade grau I.';
  //         break;
  //       case Number(valorIMC >= 35 && valorIMC <= 39.99):
  //         this.resultado = 'com obsidade grau II.';
  //         break;
  //       case Number(valorIMC > 40):
  //         this.resultado = 'com obesidade grau III. Cuidado!!';
  //         break;
  //     default:
  //     }
  //   }
  // }
} 






