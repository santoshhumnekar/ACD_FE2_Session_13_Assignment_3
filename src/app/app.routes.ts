import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RolesComponent } from './roles/roles.component';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { MemberComponent } from './member/member.component';

export const APP_ROUTES : Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'role', component: RolesComponent,
    children: [
      { 
          path: '', 
          redirectTo:'admin', 
          pathMatch: 'full'
      }, 
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'superadmin',
        component: SuperAdminComponent
      },
      {
        path: 'member',
        component: MemberComponent
      }
    ]  
 }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);