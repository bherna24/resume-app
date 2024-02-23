import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brenda Hernandez';
  quotes: string[] = [
    "Spacetime tell matter how to move, matter tells spacetime how to curve. J.Wheeler",
    "Time and space and gravitation have no separate existence from matter. Einstein",
    "To think about space, imagine a big piece of rubber that you can pull and twist and bend. We are finite, in that we are a source of the infinite. Alan Guth",
    "All great and wonderful things are lonely. J.Steinbeck"
  ];

  currentQuoteIndex = 0;


  @ViewChild(MatSidenav) sidenav!: MatSidenav;


  constructor(
    private observer: BreakpointObserver, 
    private router: Router) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) =>{
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode= 'side';
        this.sidenav.open();
      }
    })
     //automatically change the qoute every 5 seconds
     setInterval(() => {
      this.changeQuote();
    }, 5000);

    
  }changeQuote() {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    }
}