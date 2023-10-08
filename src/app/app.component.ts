import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_calculator';
  toShow = '0';
  currentValue = ''

  addToInput(value:string){
    // if(this.currentValue == '0'){
    //   this.currentValue = value
    // }
    // else{
      this.currentValue = this.currentValue + value;
    // }
    this.toShow = this.currentValue;

  }

  Equal(){
    try{
      this.toShow = eval(this.currentValue);
    }
    catch(error){
      this.toShow = 'Error' ;
    }
    this.currentValue = this.toShow.toString();
  }

  Clear(){
    this.toShow = '0';
    this.currentValue = '';
  }

  Back(){
    if (this.currentValue.length > 0) {
      this.currentValue = this.currentValue.slice(0, -1);
    }

    if(this.currentValue == ''){
      this.toShow = '0'}
    else {
      this.toShow = this.currentValue;
    }
  }

  CalcValue(value:string){
    if(value.charAt(0) == '0'){
      value = value.slice(1,)
    }
    if(value.length > 0){
      this.toShow = eval(value)
      this.currentValue = this.toShow;
    }
  }
}
