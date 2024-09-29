import { Routes } from '@angular/router';
import { LoginComponent } from './component/common/login/login.component';
import { PageNofoundComponentComponent } from './page-nofound-component/page-nofound-component.component';
import { AdminDashboardComponent } from './component/common/admin-dashboard/admin-dashboard.component';
import { StateMasterComponent } from './component/Masters/state-master/state-master.component';
import { RegisterComponent } from './component/common/register/register.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full',title:"Login"},
  {path: 'login', redirectTo: 'login', pathMatch: 'full',title:"Login"},
  {path: 'Register',component:RegisterComponent,title:"Register"},
  {path: 'login',  component:LoginComponent,title:"Login"},
  {
    path: 'Dashboard',  component: AdminDashboardComponent,title:"Dashboard", children: [
        {path: 'CommissionType', component: StateMasterComponent},
      ]
    },
    { path: '**', pathMatch: 'full',  component: PageNofoundComponentComponent },
  
];
