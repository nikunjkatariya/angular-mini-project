import { Component, OnInit } from '@angular/core';
import { CrudDataService } from '../crud-data.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

  constructor(private service:CrudDataService) { }

  ngOnInit(): void {
    if(this.service.status){
      this.service.getBuyerList().subscribe(data=>{
        console.log(data);
        this.showBuyer(data);
      });
    }
    else{
      
    }
  }
  
  BuyerList:any;
  showBuyer(data:any){
    this.BuyerList=data;
  }
}
