import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Already in!';

  public garantizar(){
    const texto1= ('Change for exercise 3');
    console.log(texto1);
  }

  public callMe(){
    const cadena = ("“Here button. I called you!” ")
  }
}
