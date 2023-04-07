import {Component} from '@angular/core';
import {CommonService} from "../common.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobile = false;

  constructor(private commonService: CommonService,
              private router: Router,
              public dialog: MatDialog) {
    this.isMobile = this.commonService.getIsMobile()
  }

  goTo(url: string) {
    window.open(url, '_blank')?.focus();
  }

  navigateToRoute(route: string) {
    this.router.navigateByUrl(route)
  }
  openInNewTab(url: string) {
    window.open(url, '_blank')!.focus();
  }

  openContactDialog() {
    this.dialog.open(ContactDialogComponent, {restoreFocus: false});
  }
}
