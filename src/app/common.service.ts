import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private isMobile = false

  constructor() {
  }

  setIsMobile(isMobile: boolean): void {
    this.isMobile = isMobile;
  }

  getIsMobile(): boolean {
    return this.isMobile
  }

}
