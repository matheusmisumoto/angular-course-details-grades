import { Component, OnInit } from '@angular/core';

import { notas } from '../notas';
import { disciplinas } from '../disciplinas';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  notas;
  totalDisciplinas = Object.keys(disciplinas).length;

  constructor() { }

  ngOnInit() {
  }

  getConcluidas(){
    let progresso = Object.keys(notas).length;
    for(let i = 0; i < notas.length; i++){
      if(notas[i].enrolled == true && notas[i].finalGrade == null){
        progresso--;
      }
    }
    return progresso;
  }

  getMedia(){
    let cursadas = 0;
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
      if(notas[i].finalGrade !== null){
        soma = soma + notas[i].finalGrade;
        cursadas++;
      }
    }
    return (soma / cursadas).toFixed(2);
  }

}