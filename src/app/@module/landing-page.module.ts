import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewMediineComponent } from './view-mediine/view-mediine.component';
import { CartComponent } from './cart/cart.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    AddPatientComponent,
    PlaceOrderComponent,
    DashboardComponent,
    CheckoutComponent,
    OrderDetailsComponent,
    ViewMediineComponent,
    CartComponent,
    PatientListComponent,
    ViewPatientComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LandingPageRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ]
})
export class LandingPageModule { }
