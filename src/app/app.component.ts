import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>
    
  `,
  styles: [
    `
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class AppComponent implements OnInit {
  public name = "Codevolution";
  public successClass="text-success";
  public myId = "testId";
  public isDisabled=false;
constructor(){}

ngOnInit(){}

}
