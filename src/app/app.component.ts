import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_IMC';

  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  mensagem: string = "";
  resultado: string = ""

  calcular() {

    this.altura = this.altura / 100;
    this.imc = (this.peso / (this.altura * this.altura));
    if (this.altura !== 0 && this.peso !== 0) {
      if (this.imc < 18.5) {
        this.mensagem = "Magreza";
      } else if (this.imc > 18.5 && this.imc < 24.9) {
        this.mensagem = "Normal";
      } else if (this.imc > 25 && this.imc < 29.9) {
        this.mensagem = "Sobrepeso";
      } else if (this.imc > 30 && this.imc < 34.5) {
        this.mensagem = "Obesidade grau I";
      } else if (this.imc > 35 && this.imc < 39.9) {
        this.mensagem = "Obesidade grau II";
      } else if (this.imc >= 40) {
        this.mensagem = "Obesidade grau III";
      }
      this.resultado = `Seu IMC é ${this.imc.toFixed(2)}! ${this.mensagem}`;
    } else {
      this.resultado = "Preencha todos os campos!";
    }
  }
}
