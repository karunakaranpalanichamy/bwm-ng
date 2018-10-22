import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle = "I am inside app component";

  callMe(){
    this.componentTitle = "button cliked";
  }
}
