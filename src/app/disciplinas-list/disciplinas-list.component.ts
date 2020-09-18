import { Component, OnInit } from '@angular/core';

import { disciplinas } from '../disciplinas';
import { notas } from '../notas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-list',
  templateUrl: './disciplinas-list.component.html',
  styleUrls: ['./disciplinas-list.component.css']
})
export class DisciplinasListComponent implements OnInit {
  lista = disciplinas;
  nota = notas;
  ciclo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.lista = disciplinas.filter(aula => aula.semester == parseInt(params.get('ciclo')))
      this.ciclo = parseInt(params.get('ciclo'));
    })
  }

  getNota(codigo){
    let materia = notas.find(listagem => listagem.code == codigo);
    if(materia == null) {
      return 'NC';
    }
    else if(materia.finalGrade !== null){
      return materia.finalGrade;
    }
    else if(materia.finalGrade == null && materia.enrolled == false){
      return 'APD';
    }
    else if(materia.finalGrade == null && materia.enrolled == true){
      return '--';
    }
  }

}