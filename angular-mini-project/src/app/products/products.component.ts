import { Component, OnInit } from '@angular/core';
import { CrudDataService } from '../crud-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:CrudDataService) { }

  ngOnInit(): void {
    if(this.service.status){
      this.service.getProductList().subscribe(data=>{
        console.log(data);
        this.showProducts(data);
      });
    }
    else{
      
    }
  }

  productList:any;
  showProducts(data:any){
    this.productList=data;
  }
}
