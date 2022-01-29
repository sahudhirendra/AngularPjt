import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimeNgPjt';
  data1=10;
  updateChild(){
    this.data1=Math.random();
  }
  greet(name:string){
    alert('Hello - ' + name);
  }
}
