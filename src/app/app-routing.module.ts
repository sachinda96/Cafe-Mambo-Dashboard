import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustDashboardComponent } from './customer/cust-dashboard/cust-dashboard.component';
import { CustItemReviewComponent } from './customer/cust-item-review/cust-item-review.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { OrderListComponent } from './customer/order-list/order-list.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { ReservationComponent } from './customer/reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { OnlineOrdersComponent } from './online-orders/online-orders.component';
// import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'nav',
    component: NavBarComponent,
    // children:[
    //   {
    //     path:"",
    //     redirectTo:"dashnoard",
    //     pathMatch: "full"
    //   },

    //   {
    //     path:"dashnoard",
    //     component:DashboardComponent,
    //     children: [
    //       {
    //         path:"onlineorder",
    //         component:OnlineOrdersComponent,
    //         children:[
    //           {
    //             path:"vieworder",
    //             component:ViewOrderComponent
    //           },
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     path:"onlineorder",
    //     component:OnlineOrdersComponent
    //   },
    //   {
    //     path:"vieworder/:id",
    //     component:ViewOrderComponent
    //   },
    // ]
  },
  // {
  //   path:"onlineorder",
  //   component:OnlineOrdersComponent
  // }
  {
    path: 'customer/dashboard',
    component: CustDashboardComponent,
  },
  {
    path: 'customer/order/list',
    component: OrderListComponent,
  },
  {
    path: 'customer/reservation',
    component: ReservationComponent,
  },
  {
    path: 'customer/profile',
    component: ProfileComponent,
  },
  {
    path: 'customer/feedback',
    component: FeedbackComponent,
  },
  {
    path: 'customer/itemReview',
    component: CustItemReviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
