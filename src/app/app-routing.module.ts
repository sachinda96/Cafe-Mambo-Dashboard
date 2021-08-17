import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [

  {
    path:"",
    component:LoginComponent

  },
  {
    path:"nav",
    component:NavBarComponent,
    children:[
      {
        path:"",
        redirectTo:"dashnoard",
        pathMatch: "full"
      },

      {
        path:"dashnoard",
        component:DashboardComponent
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
