import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'datos-asamblea',
    loadChildren: () => import('./pages/datos-asamblea/datos-asamblea.module').then( m => m.DatosAsambleaPageModule)
  },
  {
    path: 'acta-constitutiva',
    loadChildren: () => import('./pages/acta-constitutiva/acta-constitutiva.module').then( m => m.ActaConstitutivaPageModule)
  },
  {
    path: 'acta-previsualizacion',
    loadChildren: () => import('./pages/acta-previsualizacion/acta-previsualizacion.module').then( m => m.ActaPrevisualizacionPageModule)
  },
  {
    path: 'asociacion-creada',
    loadChildren: () => import('./pages/asociacion-creada/asociacion-creada.module').then( m => m.AsociacionCreadaPageModule)
  },
  
  {
    path: 'cambio-ordinario',
    loadChildren: () => import('./pages/cambio-ordinario/cambio-ordinario.module').then( m => m.CambioOrdinarioPageModule)
  },
  {
    path: 'cambios-extraordinarios',
    loadChildren: () => import('./pages/cambios-extraordinarios/cambios-extraordinarios.module').then( m => m.CambiosExtraordinariosPageModule)
  },
  {
    path: 'cambios-principal',
    loadChildren: () => import('./pages/cambios-principal/cambios-principal.module').then( m => m.CambiosPrincipalPageModule)
  },
  {
    path: 'conclusion-asociacion',
    loadChildren: () => import('./pages/conclusion-asociacion/conclusion-asociacion.module').then( m => m.ConclusionAsociacionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mesa-debates',
    loadChildren: () => import('./pages/mesa-debates/mesa-debates.module').then( m => m.MesaDebatesPageModule)
  },
  {
    path: 'mesa-directiva',
    loadChildren: () => import('./pages/mesa-directiva/mesa-directiva.module').then( m => m.MesaDirectivaPageModule)
  },

  {
    path: 'miembros-asamblea',
    loadChildren: () => import('./pages/miembros-asamblea/miembros-asamblea.module').then( m => m.MiembrosAsambleaPageModule)
  },
  {
    path: 'modal-elegir-participante',
    loadChildren: () => import('./pages/modal-elegir-participante/modal-elegir-participante.module').then( m => m.ModalElegirParticipantePageModule)
  },
  {
    path: 'modal-eliminar',
    loadChildren: () => import('./pages/modal-eliminar/modal-eliminar.module').then( m => m.ModalEliminarPageModule)
  },
  {
    path: 'modal-info-integrante',
    loadChildren: () => import('./pages/modal-info-integrante/modal-info-integrante.module').then( m => m.ModalInfoIntegrantePageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
