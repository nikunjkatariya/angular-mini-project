import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { BuyersComponent } from './buyers/buyers.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SellersComponent } from './sellers/sellers.component';

// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'customers',component:CustomersComponent,canActivate:[AuthGuard]},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'buyers',component:BuyersComponent,canActivate:[AuthGuard]},
  {path:'sellers',component:SellersComponent,canActivate:[AuthGuard]},
  {path:'**',component:LoginComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
