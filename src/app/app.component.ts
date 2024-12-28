import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ActionsComponent} from "./components/action/actions.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgClass} from "@angular/common";
import {SubActionsComponent} from "./components/sub-actions/sub-actions.component";
import {FormComponent} from "./components/form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionsComponent, HeaderComponent, NgClass, SubActionsComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "customer-care-front-end-angular";
  logoUrl = "./assets/client-network.gif";
  tabContent = "Please select a group of actions (Customers, Devices or Customers and Devices)";
  actionSelected = "";
  subActionSelected = "";

  onActionSelected(actionSelected:string){
    if (actionSelected) {
      this.actionSelected = actionSelected;
      this.subActionSelected = "";
    }
  }

  onSubActionSelected(subActionSelected:string){
    if (subActionSelected) {
      this.subActionSelected = subActionSelected;
    }
  }

}
