import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 99;
  public appPages = [
    {
      title: 'Contactos SDB CAM',
      url: '/contactos',
      icon: 'assets/m-icons/contacto-icon.png'
    },
    {
      title: 'Colaboradores',
      url: '/colaboradores',
      icon: 'assets/m-icons/contacto-icon.png'
    },
    {
      title: 'Calendario inspectorial',
      url: '/calendario',
      icon: 'assets/m-icons/Agenda-icono.png'
    },
    {
      title: 'Aniversarios y cumpleaños',
      url: '/aniversarios',
      icon: 'assets/m-icons/aniversarios.png'
    },
    {
      title: 'Casas salesianas',
      url: '/casas',
      icon: 'assets/m-icons/casas-icon.png'
    },
    {
      title: 'Consejo inspectorial',
      url: '/consejo',
      icon: 'assets/m-icons/consejo-icon.png'
    },
    {
      title: 'Animación y comisiones',
      url: '/animacion',
      icon: 'assets/m-icons/animacion-icon.png'
    },
    {
      title: 'Fundaciones y servicios',
      url: '/servicios',
      icon: 'assets/m-icons/servicios-icon.png'
    },
    {
      title: 'Asociaciones nacionales',
      url: '/asociaciones',
      icon: 'assets/m-icons/asociaciones-icon.png'
    },
    {
      title: 'Consejo General',
      url: '/consejo-general',
      icon: 'assets/m-icons/consejo-general-icon.png'
    },
    {
      title: 'Obispos salesianos en CA',
      url: '/obispos',
      icon: 'assets/m-icons/obispos-icon.png'
    },
    {
      title: 'Formandos',
      url: '/formandos',
      icon: 'assets/m-icons/formandos-icon-color.png'
    },
    {
      title: 'Familia salesiana',
      url: '/familia',
      icon: 'assets/m-icons/familia-icon.png'
    },
    {
      title: 'Caminando',
      url: '/caminando-index',
      icon: 'assets/m-icons/caminando-icon.png'
    },
    {
      title: 'Lectura del día',
      url: '/lectura',
      icon: 'assets/m-icons/Lectura-icon.png'
    },
    {
      title: 'Aniversarios fallecidos',
      url: '/fallecidos',
      icon: 'assets/m-icons/fallecidos-icon.png'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      /* this.statusBar.styleDefault();
      this.splashScreen.hide(); */
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
