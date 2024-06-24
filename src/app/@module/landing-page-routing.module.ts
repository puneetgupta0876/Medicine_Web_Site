import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-patient', component: AddPatientComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'place-order', component: PlaceOrderComponent },

      { path: 'order-details', component: OrderDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
