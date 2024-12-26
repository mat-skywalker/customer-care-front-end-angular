import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ActionComponent} from "./components/action/action.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "customer-care-front-end-angular";
  logoUrl = "../assets/client-network.gif";
}
