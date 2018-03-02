import { Component, OnInit } from '@angular/core';
import {showWarningOnce} from 'tslint/lib/error';
import { ProductsService} from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any;
  pageTitle: string ="Products - List";


  constructor(private _productService: ProductsService) { }


  ngOnInit() {
    this.products = this._productService.getProducts().subscribe((data) => {
      this.products = data;
    });

  }

  showHideImage: Boolean = true;

  toggleImage(): void{
    this.showHideImage = !this.showHideImage;
  }

  ratingParentFn(msg: string) {
    this.pageTitle = msg;
    console.log(msg);
  }

}
