import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OnlineOrdersComponent } from './online-orders/online-orders.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ManageItemComponent } from './manage-item/manage-item.component';
import {FormsModule} from "@angular/forms";
import { ViewItemComponent } from './view-item/view-item.component';
import { ManagePackageComponent } from './manage-package/manage-package.component';
import { AllPackagesComponent } from './all-packages/all-packages.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    OnlineOrdersComponent,
    ViewOrderComponent,
    ManageItemComponent,
    ViewItemComponent,
    ManagePackageComponent,
    AllPackagesComponent,
    ManageCategoryComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
