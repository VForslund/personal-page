import {Component} from '@angular/core';

import {DeviceDetectorService} from "ngx-device-detector";
import {CommonService} from "./common.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private deviceService: DeviceDetectorService,
              private commonService: CommonService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private router: Router
  ) {

    const path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }

    this.commonService.setIsMobile(this.deviceService.isMobile() || this.deviceService.isTablet());
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/github.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/instagram.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/linkedin.svg`)
    );
  }

}
