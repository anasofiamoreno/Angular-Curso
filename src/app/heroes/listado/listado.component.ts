import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','IronMan','Hulk']
  heroeB: string = ""

  fnBorrar(): void {
    this.heroeB = this.heroes.shift() || ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
