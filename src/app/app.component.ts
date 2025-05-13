import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currency-converter';
  currencies:any=[]
  fromCurrency:any='1inch';
  toCurrency:any='1inch';
  fromVal:number=0;
  toVal : number = 0;

  constructor(){
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then((response)=>response.json())
    .then((data)=>{
     
      this.currencies= Object.entries(data)
    
      
    })
  }

  onFromCurrency(event:any){
    this.fromCurrency=event.target.value.split(',')[0]
    console.log(this.fromCurrency)
  }

  onToCurrency(event:any){
    this.toCurrency=event.target.value.split(',')[0]
  }

  fromValue(event:any){
    this.fromVal= event.target.value
    console.log(this.fromVal)
  }

  Calculate(){
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${this.fromCurrency}.json`)
    .then((response)=>response.json())
    .then((data)=>{
      this.toVal = this.fromVal * data[this.fromCurrency][this.toCurrency]
    })
  }

}
