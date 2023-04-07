import {AfterViewInit, Component} from '@angular/core';
import TagCloud, {TagCloudOptions} from 'TagCloud';
import {CommonService} from "../../common.service";

@Component({
  selector: 'app-skill-sphere',
  templateUrl: './skill-sphere.component.html',
  styleUrls: ['./skill-sphere.component.scss']
})
export class SkillSphereComponent implements AfterViewInit {
  isMobile = false;

  constructor(commonService: CommonService) {
    this.isMobile = commonService.getIsMobile()
  }
  ngAfterViewInit() {

    const container = document.getElementById('sphere') as HTMLDivElement;
    const texts = [
      'Scala', 'Java', 'Go',
      'Angular', 'Docker', 'Cassandra',
      'SQL', 'Typescript', 'Python',
      'C#', 'Git', "WSL", "Linux", "Windows"
    ];
    const options: TagCloudOptions = {
      maxSpeed: "slow",
      radius: Math.min(container.clientHeight, container.clientWidth) / 2,
      initSpeed: 'fast'
    };

    TagCloud(container, texts, options);
  }
}
