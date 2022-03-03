import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyersComponent } from './buyers/buyers.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SellersComponent } from './sellers/sellers.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'customers',component:CustomersComponent},
  {path:'products',component:ProductsComponent},
  {path:'buyers',component:BuyersComponent},
  {path:'sellers',component:SellersComponent},
  {path:'**',component:CustomersComponent},
  {path:'',component:CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
