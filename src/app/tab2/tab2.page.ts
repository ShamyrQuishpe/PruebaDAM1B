import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  boton2(){
    window.open('https://github.com/ShamyrQuishpe/PruebaDAM1B','_blank')
  }
  constructor() {}

}
