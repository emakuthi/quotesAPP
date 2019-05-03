import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];


  constructor(){

    this.quotes=["akili ni nywele kila mtu anazake","bahati ya mwenzio usilalie mlango wazi"]
  }
}
