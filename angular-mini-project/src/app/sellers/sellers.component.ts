import { Component, OnInit } from '@angular/core';
import { CrudDataService } from '../crud-data.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  constructor(private service:CrudDataService) { }

  ngOnInit(): void {
    if(this.service.status){
      this.service.getSellerList().subscribe(data=>{
        console.log(data);
        this.showSeller(data);
      });
    }
    else{
      
    }
  }

  SellerList:any;
  showSeller(data:any){
    this.SellerList=data;
  }

}
