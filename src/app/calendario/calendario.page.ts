import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; 
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  meses = [
    { n: '01', label: 'Enero' },
    { n: '02', label: 'Febrero' },
    { n: '03', label: 'Marzo' },
    { n: '04', label: 'Abril' },
    { n: '05', label: 'Mayo' },
    { n: '06', label: 'Junio' },
    { n: '07', label: 'Julio' },
    { n: '08', label: 'Agosto' },
    { n: '09', label: 'Septiembre' },
    { n: '10', label: 'Octubre' },
    { n: '11', label: 'Noviembre' },
    { n: '12', label: 'Diciembre' }
  ];
  constructor(private rout: Router,public navCtrl: NavController) { }

  ngOnInit() {
  }
  viewMonth(mnumber){
      let year = new Date().getFullYear();
      this.rout.navigate(['calendario/mes'], { queryParams: { mes: year + '-' + mnumber} }); 
  }
}
