import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {

  a: number = 0;
  b: number = 0;
  c: number = 0;
  result: string = '';

  onSubmit(){
    this.result = this.calculate(this.a,this.b,this.c);
  }

  calculate(a:number, b:number, c:number):string{
    
    if(a===0){
      return "El valor de a no puede ser 0"
    }
    const funcion = b*b-4*a*c;

    if(funcion>0){
      const raiz1 = (-b + Math.sqrt(funcion)) / (2 * a);
      const raiz2 = (-b - Math.sqrt(funcion)) / (2 * a); 
      return `Raíces reales: ${raiz1} y ${raiz2}`;
    }else if(funcion===0){
      const raiz = -b/(2*a)
      return `Raíz doble: ${raiz}`
    }else{
      const real = (-b / (2 * a)).toFixed(2);
      const imaginario = (Math.sqrt(-funcion) / (2 * a)).toFixed(2);
      return `Raíces complejas: ${real} ± ${imaginario}i`;
    }

  }
  
}
