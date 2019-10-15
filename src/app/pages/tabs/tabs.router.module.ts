import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'actividades',
        children: [
          {
            path: '',
            loadChildren: '../actividades/actividades.module#ActividadesPageModule'
          },
          {
            path: ':id',
            loadChildren: '../detalle-actividad/detalle-actividad.module#DetalleActividadPageModule'
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: 'sincronizar',
        children: [
          {
            path: '',
            loadChildren: '../sincronizar/sincronizar.module#SincronizarPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/actividades',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
