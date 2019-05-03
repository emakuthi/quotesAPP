import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() ),
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() ),
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() ),
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() ), 
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() ),
    new Quote('akili ni nywele kila mtu anazake','anonymous','Elvis', 1,0, new Date() )
  ]

  constructor() { }

  ngOnInit() {
  }

}
