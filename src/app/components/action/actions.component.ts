import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'actions',
  templateUrl: './actions.component.html',
  standalone: true,
  imports: [],
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  @Output()
  actionSelected = new EventEmitter<any>();

  onCustomersButtonSelected() {
    this.actionSelected.emit("Customers");
  }

  onDevicesButtonSelected() {
    this.actionSelected.emit("Devices");
  }

  onCustomerAndDevicesButtonSelected() {
    this.actionSelected.emit("Customer And Devices");
  }

}
