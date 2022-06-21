import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestacao',
  templateUrl: './gestacao.component.html',
  styleUrls: ['./gestacao.component.scss']
})
export class GestacaoComponent implements OnInit {
  private day!: string
  private month!: string
  private year!: string
  private result!: string

  constructor() { }

  ngOnInit(): void {
  }

  calcGestacao(){
  }
  
}

