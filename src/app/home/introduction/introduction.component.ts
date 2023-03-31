import {Component} from '@angular/core';
import {CommonService} from "../../common.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  isMobile = false

  constructor(commonService: CommonService) {
    this.isMobile = commonService.getIsMobile()
  }
}
