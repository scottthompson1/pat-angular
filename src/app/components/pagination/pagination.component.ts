import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number = 1;
  @Input() total: number = 0; //default value
  @Input() limit: number = 20;
  @Output() changePage = new EventEmitter<number>();
  
  pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
    console.log(this.pages);
  }

  range(start: number, end:number): number[]{
    return [...Array(end).keys()].map(el => el+start);

  }

}
