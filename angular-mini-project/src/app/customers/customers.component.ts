import { Component, OnInit } from '@angular/core';
import { CrudDataService } from '../crud-data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private service:CrudDataService) { }


  ngOnInit(): void {
    if(this.service.status){
      this.service.getCustomerList().subscribe(data=>{
        console.log(data);
        this.showCustomers(data);
      });
    }
    else{
      
    }
  }

  customerList:any;
  showCustomers(data:any){
    this.customerList=data;
  }
}
