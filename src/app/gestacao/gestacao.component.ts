import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestacao',
  templateUrl: './gestacao.component.html',
  styleUrls: ['./gestacao.component.scss']
})
export class GestacaoComponent implements OnInit {
  
  dataMenstruacao!: string;
  birthDate: string = "Nenhuma data informada";

  constructor() { }

  ngOnInit() {
  }

  ruleMonth() {
    let monthToValidate = this.dataMenstruacao.substring(5,7);

    if (monthToValidate == "01" || monthToValidate == "02" || monthToValidate == "03") {

      let day;
      day = this.dataMenstruacao.substring(8,10);
      day = parseInt(day) + 7;

      let month;
      month = this.dataMenstruacao.substring(5,7)
      month = parseInt(month) + 9;

      let year;
      year = this.dataMenstruacao.substring(0,4);
      year = parseInt(year);
      
      this.birthDate = day + "/" + month + "/" + year;
      
    }
  }

  calcGestacao(){
    this.ruleMonth();
  } 
}

