import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent {

  progressState: string = 'En étude';

  changeProgressState() {
    if (this.progressState === 'En étude') {
      this.progressState = 'En cours';
    } else {
      this.progressState = 'En étude';
    }
  }

}
