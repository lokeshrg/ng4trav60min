import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;// = "APP-Render es un esponla";
  age:number;
  email:string;
  address:Address;
  hobbies: string[];
  hello:any;

  constructor() { }

  ngOnInit() {
    this.name="OverEscribir";
    this.age=30;
    this.address={
      street: '4315 Walnut Street',
      city: 'Kansas City',
      state: 'MO'
    };
    this.hobbies = ['chess', 'netflix'];
    this.hello = 12;
  }

  onClick(){
    console.log('Clicked!');
    this.name='Tumpery';
  }

}

interface Address{
  street: string;
  city: string;
  state: string;
}
