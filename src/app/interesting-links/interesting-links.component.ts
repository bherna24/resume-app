import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,  } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

export interface Book {
  id: number;
  title: string;
  author:string;
  desc: string;
}

const ELEMENT_DATA: Book[] = [
  { id: 1, title: 'Mans Search for Meaning', author: 'Viktor Frankl', desc: `Introduction to logotherapy; will to meaning in concentration camp` },
  { id: 2, title: 'Holy Bible', author: 'Many authors', desc: `Compiled records of the One true God and His Son Jesus; the good news of the world` },
  { id: 3, title: 'The Canterbury Tales',  author: 'Geoffrey Chaucer', desc: `Collection of short stories told from a major central story of travelers` },
  { id: 4, title: 'Persuassion',  author: 'Jane Austen', desc: `Novel on the persuasive and sneaky motifs of people and their consequences` },
  { id: 5, title: 'Great Expectations',  author: 'Charles Dickens', desc: `How expectations suck the life out of you` },
  { id: 6, title: 'The Stranger',  author: 'Albert Camus', desc: `All about the dangers of being misunderstood by society` },
  { id: 7, title: 'Into the Wild',  author: 'Jon Krakauer', desc: `What happens when consciousness is too logical and no longer conscious` },
  { id: 8, title: 'Beautiful Disaster',  author: 'Jamie McGuire', desc:`A romance about two egotistical college students` },
  { id: 9, title: 'Four Loves',  author: 'C.S. Lewis', desc: `A description and introduction to Love & its types` },
  { id: 10, title: 'The Art of Loving',  author: 'Erich Fromm', desc: `On what it means to understand and act in love` },
  { id: 11, title: 'The Faifthful Gardener', author: 'Clarissa Pinkola Estes', desc: `A wise story about that which can never die. About pain, rebirth, and life.`},
  { id: 12, title: 'The Alchemist', author: 'Paulo Coelho', desc: `A hero's journey, coming-of-age novel about dicovering one's purpose in life.`},
  { id: 13, title: 'Priceless: The Myth of Fair Value', author:'William Poundstone', desc: `Discusses the mehtod by which price is conceived: there is no method and its all madness`}
];

@Component({
  selector: 'app-interesting-links',
  templateUrl: './interesting-links.component.html',
  styleUrls: ['./interesting-links.component.css'],
})
export class InterestingLinksComponent {
  displayedColumns: string[]= ['title', 'author', 'desc'];
  dataSource = new MatTableDataSource<Book>(ELEMENT_DATA);  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

/*  applyFilter(filterValue: string){
    filterValue = filterValue.trim(); // removes whitespaces
    filterValue = filterValue.toLowerCase(); //defaults to lowercase matches
    this.dataSource.filter = filterValue;

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }*/
}

