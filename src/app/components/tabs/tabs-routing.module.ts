import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from 'app/services/guard/guard.service';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../components/home/home.module').then(m => m.HomePageModule),
        canActivate:[GuardService],
      },
      {
        path: 'data-master',
        loadChildren: () => import('../../components/data-master/data-master.module').then( m => m.DataMasterPageModule),
        canActivate:[GuardService],
        data:{permittedRoles:['Admin']}
      },
      {
        path: 'historial',
        loadChildren: () => import('../../components/historial/historial.module').then( m => m.HistorialPageModule),
        canActivate:[GuardService],
      },
      {
        path: 'new-routine',
        loadChildren: () => import('../../components/new-routine/new-routine.module').then( m => m.NewRoutinePageModule),
        canActivate:[GuardService],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
