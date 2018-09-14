import { Component, OnInit, Input } from '@angular/core';
import { ITopNavData } from './top-nav.interface';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Input() bannerInfo: ITopNavData;

  constructor() { }

  ngOnInit() {
  }

}
