import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() ),
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() ),
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() )
  ]
  
}
