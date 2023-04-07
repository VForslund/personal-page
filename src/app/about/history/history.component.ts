import { Component } from '@angular/core';
import {CommonService} from "../../common.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  isMobile = false;

  constructor(commonService: CommonService) {
    this.isMobile = commonService.getIsMobile();
  }


}
