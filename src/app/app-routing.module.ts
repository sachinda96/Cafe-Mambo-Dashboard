import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {OnlineOrdersComponent} from "./online-orders/online-orders.component";
import {ViewOrderComponent} from "./view-order/view-order.component";
import {ManageItemComponent} from "./manage-item/manage-item.component";
import {ViewItemComponent} from "./view-item/view-item.component";
import {ManagePackageComponent} from "./manage-package/manage-package.component";
import {AllPackagesComponent} from "./all-packages/all-packages.component";

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
        component:DashboardComponent,
        children: [
          {
            path:"onlineorder",
            component:OnlineOrdersComponent,
            children:[
              {
                path:"vieworder",
                component:ViewOrderComponent
              },
            ]
          }
        ]
      },
      {
        path:"onlineorder",
        component:OnlineOrdersComponent
      },
      {
        path:"vieworder/:id",
        component:ViewOrderComponent
      },
      {
        path:"manageitem",
        component:ManageItemComponent
      },
      {
        path:"manageitem/:id",
        component:ManageItemComponent
      },
      {
        path:"allitems",
        component:ViewItemComponent
      },
      {
        path:"newpackage",
        component:ManagePackageComponent
      },
      {
        path:"newpackage/:id",
        component:ManagePackageComponent
      },
      {
        path:"allpackage",
        component:AllPackagesComponent
      },
    ]

  },
  {
    path:"onlineorder",
    component:OnlineOrdersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
