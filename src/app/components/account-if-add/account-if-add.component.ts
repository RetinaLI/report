import { Component, OnInit, Input } from '@angular/core';
import { IAccountIfAddData } from './account-if-add.interface';

@Component({
  selector: 'app-account-if-add',
  templateUrl: './account-if-add.component.html',
  styleUrls: ['./account-if-add.component.scss']
})
export class AccountIfAddComponent implements OnInit {

  @Input() accountIfAddData: IAccountIfAddData;
  constructor() { }

  ngOnInit() {
  }

}
