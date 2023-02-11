import { Component } from '@angular/core';

import {DeviceDetectorService, DeviceInfo} from "ngx-device-detector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMobile: Boolean = false;
  constructor(private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile() || this.deviceService.isTablet();
  }

}
