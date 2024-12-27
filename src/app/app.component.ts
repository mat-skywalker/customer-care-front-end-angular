import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ActionsComponent} from "./components/action/actions.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionsComponent, HeaderComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "customer-care-front-end-angular";
  logoUrl = "./assets/client-network.gif";
  tabContent = "Please select a group of actions (Customers, Devices or Customers and Devices)";
  buttonSelected = "";

  onButtonSelected(buttonSelected:string){
    if (buttonSelected) {
      this.buttonSelected=buttonSelected;
    }
  }

}
