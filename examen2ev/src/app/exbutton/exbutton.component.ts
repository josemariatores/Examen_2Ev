import {Component} from '@angular/core';

@Component({
  selector: 'app-exbutton',
  templateUrl: './exbutton.component.html',
  styleUrls: ['./exbutton.component.css']
  
})
export class EXButtonComponent {

  public justdoit(){
    const texto = ("Exercise 5 done!");
    console.log(texto);
  }
  
  }


