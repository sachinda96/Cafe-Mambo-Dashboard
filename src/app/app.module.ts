import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { OnlineOrdersComponent } from './online-orders/online-orders.component';
// import { ViewOrderComponent } from './view-order/view-order.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustDashboardComponent } from './customer/cust-dashboard/cust-dashboard.component';
import { OrderListComponent } from './customer/order-list/order-list.component';
import { ReservationComponent } from './customer/reservation/reservation.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { CustItemReviewComponent } from './customer/cust-item-review/cust-item-review.component';
import { CustPromotionsComponent } from './customer/cust-promotions/cust-promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    CustDashboardComponent,
    OrderListComponent,
    ReservationComponent,
    ProfileComponent,
    FeedbackComponent,
    CustItemReviewComponent,
    CustPromotionsComponent,
    // OnlineOrdersComponent,
    // ViewOrderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
