import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrudDataService {

  constructor(private http: HttpClient,private router:Router) { }

  isLoggedIn = false;

  redirectUrl : string | null = null ;

  login():Observable<boolean>{
    this.isLoggedIn=true;
    return of(true).pipe(
      delay(1000)
    );
  }

  logout(){
    this.isLoggedIn=false;
    this.router.navigate(['/','login']);
  }

  //Login
  getLoginList(){
    return this.http.get("http://localhost:3000/login_details/");
  }

  //Customers
  getCustomerList() {
    return this.http.get("http://localhost:3000/customer_details/");
  }

  addCustomer(data: any) {
    return this.http.post("http://localhost:3000/customer_details/", data);
  }

  updateCustomer(id: any, data: any) {
    return this.http.put(`http://localhost:3000/customer_details/${id}`, data);
  }

  deleteCustomer(id: any) {
    return this.http.delete(`http://localhost:3000/customer_details/${id}`);
  }

  //Products
  getProductList() {
    return this.http.get("http://localhost:3000/product_details/");
  }

  addProduct(data: any) {
    return this.http.post("http://localhost:3000/product_details/",data);
  }

  updateProduct(id: any, data: any) {
    return this.http.put(`http://localhost:3000/product_details/${id}`, data);
  }

  deleteProduct(id: any) {
    return this.http.delete(`http://localhost:3000/product_details/${id}`);
  }

  //Buyer
  getBuyerList() {
    return this.http.get("http://localhost:3000/buyer_details/");
  }

  addBuyer(data: any) {
    return this.http.post("http://localhost:3000/buyer_details/",data);
  }

  updateBuyer(id: any, data: any) {
    return this.http.put(`http://localhost:3000/buyer_details/${id}`, data);
  }

  deleteBuyer(id: any) {
    return this.http.delete(`http://localhost:3000/buyer_details/${id}`);
  }

  //Seller
  getSellerList() {
    return this.http.get("http://localhost:3000/seller_details/");
  }

  addSeller(data: any) {
    return this.http.post("http://localhost:3000/seller_details/",data);
  }

  updateSeller(id: any, data: any) {
    return this.http.put(`http://localhost:3000/seller_details/${id}`, data);
  }

  deleteSeller(id: any) {
    return this.http.delete(`http://localhost:3000/seller_details/${id}`);
  }
}
