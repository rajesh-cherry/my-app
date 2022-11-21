import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { FacebookPostsComponent } from './facebook-posts/facebook-posts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GmailComponent } from './gmail/gmail.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RatingComponent } from './rating/rating.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SquareComponent } from './square/square.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children:[{path:"calculator", component:CalculatorComponent},{path:"interpolation", component:InterpolationComponent},
  {path: 'square', component:SquareComponent},
  {path:"rectangle",component:RectangleComponent},
  {path: "employee-registration",component:EmployeeRegistrationComponent},
  {path: "cart",component:CartComponent},
  {path: "event-registration",component:EventRegistrationComponent},
  {path:'event-binding', component:EventBindingComponent},
  {path:'two-way-binding', component:TwoWayBindingComponent},
  {path:'pipes',component:PipesComponent},
  {path: 'cars', component:CarsComponent},
  {path: 'rating', component:RatingComponent},
  {path: 'gpay', component:GpayComponent},
  {path: 'bank', component:BankComponent},
  {path: 'vehicle', component:VehiclesComponent},
  {path: 'facebook-posts', component:FacebookPostsComponent},
  {path: 'flipkart', component:FlipkartComponent},
  {path: 'gmail', component:GmailComponent}

  ]},
  {path: '', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
