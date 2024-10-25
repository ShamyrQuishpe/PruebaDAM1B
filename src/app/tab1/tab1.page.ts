import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  showContent(contactInfo: string){
    alert(contactInfo)
  }

  boton1(){
    window.open('https://drive.google.com/file/d/1H4OOGMYxMehkPYV5SyABAMnclN7Hb2a6/view?usp=sharing','_blank')
  }
  public progress = 0;

  constructor(){ 
      setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }
}
