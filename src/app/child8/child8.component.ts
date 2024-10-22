import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';


@Component({
  selector: 'app-child8',
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.css']
})

export class Child8Component implements OnInit {


  getMenuId:any;
  menuData:any;

  fullName: string = '';
  email: string = '';
  address: string = '';
  notificationVisible: boolean = false;

  constructor(private param:ActivatedRoute,private service:OrderdetailsService) {}

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData= this.service.eventdetails.filter((value)=>{
        return value.id ==this.getMenuId;
      });
      console.log(this.menuData,'menudata>>')
    }
  }
  placeOrder() {
    // Show notification
    this.notificationVisible = true;

    // Hide notification after 10 seconds
    setTimeout(() => {
      this.notificationVisible = false;
    }, 10000);
  }


  }
