import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'
import * as moment from 'moment';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  display: string = '';
  fechaini!: string;
  fechafin!: string;

  constructor(public navCtrl: NavController) {

  }
  append(value: string){
    this.display += value;
  }

  calcular(){
      let ini = moment(this.fechaini);
      let fin = moment(this.fechafin);
      let diff = fin.diff(ini, 'days');
      this.display = diff.toString();
      console.log(diff);
  }

}
