import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { menuService } from "../../services/menu.service";
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'du-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss'],
  providers: [menuService]
})

export class SiderbarComponent implements OnInit {
  protected menuInfo = [];

  isViewAll: boolean = true;

  tip = new Tips;
  constructor(private _menuService: menuService,
    public _globalService: GlobalService) {
  }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
    this._isViewAll();
    this.tip.ring = true;
    this.tip.comments = true;
    this.tip.email = false;
  }

  _isViewAll() {
    this._globalService.isViewAll$.subscribe(isViewAll => {
      this.isViewAll = isViewAll;
    }, error => {
      console.log('Error: ' + error);
    });

    this._globalService._isViewAllState(true);
  }

}

export class Tips {
  ring: boolean;
  comments: boolean;
  email: boolean;
}