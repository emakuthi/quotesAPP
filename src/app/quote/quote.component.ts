import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('wisdom','akili ni nywele kila mtu anazake','anonymous','Elvis', 1, 0, new Date() ),
    new Quote('wisdom','akili ni nywele kila mtu anazake','anonymous','Elvis', 1, 0, new Date() ),
    new Quote('wisdom','akili ni nywele kila mtu anazake','anonymous','Elvis', 1, 0, new Date() ),
    new Quote('wisdom','akili ni nywele kila mtu anazake','anonymous','Elvis', 1, 0, new Date() ),
    new Quote('wisdom','akili ni nywele kila mtu anazake','anonymous','Elvis', 1, 0, new Date() ),
    new Quote('wisdom','akili ni nywele kila mtu anazake','anonymous','Elvis', 1, 0, new Date() )
  ]
  toogleDetails(index){
    this.quotes[index].showQuoteBody = !this.quotes[index].showQuoteBody;
  }
  deleteQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
  }

  constructor() { }

  ngOnInit() {
  }

}
