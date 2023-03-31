import {Component} from '@angular/core';
import {CommonService} from "../common.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobile = false;

  constructor(private commonService: CommonService) {
    this.isMobile = this.commonService.getIsMobile()
  }


  goTo(url: string) {
    window.open(url, '_blank')?.focus();
  }


  getColorTransform(startColor: string, goalColor: string) {

    const startRgb = this.hexToRgb(startColor);
    const goalRgb = this.hexToRgb(goalColor);

    const colorDiff = {
      r: goalRgb.r - startRgb.r,
      g: goalRgb.g - startRgb.g,
      b: goalRgb.b - startRgb.b,
    };

    const matrix = [
      colorDiff.r / 255, 0, 0, 0, startRgb.r / 255,
      0, colorDiff.g / 255, 0, 0, startRgb.g / 255,
      0, 0, colorDiff.b / 255, 0, startRgb.b / 255,
      0, 0, 0, 1, 0,
    ];

    const matrixString = matrix.join(" ").replaceAll("NaN" , "0");

    console.log(matrixString)

    const reval = "matrix(" + matrixString + ");"

    console.log(reval)
    return {
      filter: reval
    }
  }



  hexToRgb(hex: string): { r: number; g: number; b: number } {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return {r, g, b};
  }
}
