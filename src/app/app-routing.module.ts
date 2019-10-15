import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'actividades', loadChildren: './pages/actividades/actividades.module#ActividadesPageModule' },
  { path: 'detalle-actividad', loadChildren: './pages/detalle-actividad/detalle-actividad.module#DetalleActividadPageModule' },
  { path: 'marcar-qr', loadChildren: './pages/marcar-qr/marcar-qr.module#MarcarQRPageModule' },
  { path: 'marcar-via-qr', loadChildren: './pages/marcar-via-qr/marcar-via-qr.module#MarcarViaQRPageModule' },
  { path: 'marcar-via-formulario', loadChildren: './pages/marcar-via-formulario/marcar-via-formulario.module#MarcarViaFormularioPageModule' },
  { path: 'registrar-usuario-nuevo', loadChildren: './pages/registrar-usuario-nuevo/registrar-usuario-nuevo.module#RegistrarUsuarioNuevoPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'sincronizar', loadChildren: './pages/sincronizar/sincronizar.module#SincronizarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
