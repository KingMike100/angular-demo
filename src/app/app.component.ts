import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  showHintContent: Boolean = false;
  showAnswerContent: Boolean = false;


  showHint() {
    this.showHintContent = this.showHintContent ? false : true;
  }

  showAnswer(){
  this.showAnswerContent = this.showAnswerContent ? false : true;
  }
}
