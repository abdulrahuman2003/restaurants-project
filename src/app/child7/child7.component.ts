import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from '../orderdetails.service';

@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit {

  getMenuId: any;
  menuData: any;

  fullName: string = '';
  email: string = '';
  address: string = '';
  notificationVisible: boolean = false;

  constructor(private param: ActivatedRoute, private service: OrderdetailsService) {}

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');
    if (this.getMenuId) {
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata>>');
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

