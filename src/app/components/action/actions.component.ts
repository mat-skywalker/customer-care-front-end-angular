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
  buttonSelected = new EventEmitter<any>();

  onCustomersButtonSelected() {
    this.buttonSelected.emit("Customers");
  }

  onDevicesButtonSelected() {
    this.buttonSelected.emit("Devices");
  }

  onCustomersAndDevicesButtonSelected() {
    this.buttonSelected.emit("Customers And Devices");
  }

}
