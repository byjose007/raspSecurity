import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  pin:number;
  sistemaActivo = false;
  lucesEncendidas = false;

  ngOnInit() {
    this.pin = Math.floor(Math.random()*9000) + 1000;
  }


  activarLuces(){

    this.lucesEncendidas = !this.lucesEncendidas;

  }

  activarSistema(){
    this.sistemaActivo = !this.sistemaActivo;

  }

}
