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
import { ManageTablesComponent } from './manage-tables/manage-tables.component';
import {QRCodeModule} from "angularx-qrcode";
import { EventBookingComponent } from './event-booking/event-booking.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ShopOrdersComponent } from './shop-orders/shop-orders.component';
import { ViewShopOrderComponent } from './view-shop-order/view-shop-order.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
    ManageUserComponent,
    ManageTablesComponent,
    EventBookingComponent,
    ViewUserComponent,
    ShopOrdersComponent,
    ViewShopOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    BrowserAnimationsModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
