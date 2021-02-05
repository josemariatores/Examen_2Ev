import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'Already in!';
  

  constructor() {
    
   }
   public garantizar(){
    const texto1= ('Change for exercise 3');
    console.log(texto1);
  }

  public callMe(){
    const cadena = ("“Here button. I called you!” ")
  }
  ngOnInit(): void {
    
  }
  
}
