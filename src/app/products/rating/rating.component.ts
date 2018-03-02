import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number;

  @Output() ratingParent: EventEmitter<string> = new EventEmitter();

  ratingVal : any = [];

  constructor() { }

  ngOnInit() {
    this.ratingVal = Array(Math.round(this.rating)).fill(Math.round(this.rating));
    //console.log(this.ratingVal);
  }

  ratingClickFn() {
    this.ratingParent.emit('Rating value = ' + this.rating);

  }
}
