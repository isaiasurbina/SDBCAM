import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  /* {
    path: 'break',
    redirectTo: 'folder/break',
    pathMatch: 'full'
  }, */
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'aniversarios',
    loadChildren: () => import('./aniversarios/aniversarios.module').then( m => m.AniversariosPageModule)
  },
  {
    path: 'casas',
    loadChildren: () => import('./casas/casas.module').then( m => m.CasasPageModule)
  },
  {
    path: 'consejo',
    loadChildren: () => import('./consejo/consejo.module').then( m => m.ConsejoPageModule)
  },
  {
    path: 'animacion',
    loadChildren: () => import('./animacion/animacion.module').then( m => m.AnimacionPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'asociaciones',
    loadChildren: () => import('./asociaciones/asociaciones.module').then( m => m.AsociacionesPageModule)
  },
  {
    path: 'consejo-general',
    loadChildren: () => import('./consejo-general/consejo-general.module').then( m => m.ConsejoGeneralPageModule)
  },
  {
    path: 'obispos',
    loadChildren: () => import('./obispos/obispos.module').then( m => m.ObisposPageModule)
  },
  {
    path: 'formandos',
    loadChildren: () => import('./formandos/formandos.module').then( m => m.FormandosPageModule)
  },
  {
    path: 'familia',
    loadChildren: () => import('./familia/familia.module').then( m => m.FamiliaPageModule)
  },
  {
    path: 'caminando',
    loadChildren: () => import('./caminando/caminando.module').then( m => m.CaminandoPageModule)
  },
  {
    path: 'lectura',
    loadChildren: () => import('./lectura/lectura.module').then( m => m.LecturaPageModule)
  },
  {
    path: 'fallecidos',
    loadChildren: () => import('./fallecidos/fallecidos.module').then( m => m.FallecidosPageModule)
  },
  {
    path: 'groupview',
    loadChildren: () => import('./groupview/groupview.module').then( m => m.GroupviewPageModule)
  },
  {
    path: 'formandoslevel',
    loadChildren: () => import('./formandoslevel/formandoslevel.module').then( m => m.FormandoslevelPageModule)
  },
  {
    path: 'caminando-index',
    loadChildren: () => import('./caminando-index/caminando-index.module').then( m => m.CaminandoIndexPageModule)
  },
  {
    path: 'caminando-edition',
    loadChildren: () => import('./caminando-edition/caminando-edition.module').then( m => m.CaminandoEditionPageModule)
  },
  {
    path: 'caminando-article',
    loadChildren: () => import('./caminando-article/caminando-article.module').then( m => m.CaminandoArticlePageModule)
  },
  {
    path: 'familia-homes',
    loadChildren: () => import('./familia-homes/familia-homes.module').then( m => m.FamiliaHomesPageModule)
  },
  {
    path: 'familia-members',
    loadChildren: () => import('./familia-members/familia-members.module').then( m => m.FamiliaMembersPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'formando',
    loadChildren: () => import('./formando/formando.module').then( m => m.FormandoPageModule)
  },
  {
    path: 'colaboradores',
    loadChildren: () => import('./colaboradores/colaboradores.module').then( m => m.ColaboradoresPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
