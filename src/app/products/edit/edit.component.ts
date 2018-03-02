import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product_info :any;

  constructor(private _activeRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activeRouter.params.subscribe((data) => {
      this.product_info = data;
    });
  }

  gobacktoList(){
    this._router.navigate(['/list']);
  }

}
