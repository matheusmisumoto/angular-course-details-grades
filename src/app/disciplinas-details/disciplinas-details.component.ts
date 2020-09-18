import { Component, OnInit } from '@angular/core';

import { disciplinas } from '../disciplinas';
import { notas } from '../notas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-details',
  templateUrl: './disciplinas-details.component.html',
  styleUrls: ['./disciplinas-details.component.css']
})
export class DisciplinasDetailsComponent implements OnInit {
  disciplina;
  nota;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.disciplina = disciplinas.find(aula => aula.code == params.get('code'))
      this.nota = notas.find(codigo => codigo.code == params.get('code'));
    }
    );
  }

}