import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'asisg',
    loadChildren: () => import('./asisg/asisg.module').then( m => m.AsisgPageModule)
  },
  {
    path: 'resetp',
    loadChildren: () => import('./resetp/resetp.module').then( m => m.ResetpPageModule)
  },
  {
    path: 'asislist',
    loadChildren: () => import('./asislist/asislist.module').then( m => m.AsislistPageModule)
  },
  {
    path: 'vista-alumno',
    loadChildren: () => import('./vista-alumno/vista-alumno.module').then( m => m.VistaAlumnoPageModule)
  },
  {
    path: 'vista-profesor',
    loadChildren: () => import('./vista-profesor/vista-profesor.module').then( m => m.VistaProfesorPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'genera',
    loadChildren: () => import('./genera/genera.module').then( m => m.GeneraPageModule)
  },
  {
    path: 'rest-conf-ps',
    loadChildren: () => import('./rest-conf-ps/rest-conf-ps.module').then( m => m.RestConfPsPageModule)
  },  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
