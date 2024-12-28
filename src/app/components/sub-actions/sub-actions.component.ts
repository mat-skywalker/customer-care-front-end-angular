import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sub-actions',
  standalone: true,
  imports: [],
  templateUrl: './sub-actions.component.html',
  styleUrl: './sub-actions.component.css'
})
export class SubActionsComponent {

  @Input({required:true})
  actionSelected:string;

  @Input({required:true})
  tabContent:string;

  @Output()
  subActionSelected = new EventEmitter<any>();

  onSubActionGetCustomerSelected(){
    this.subActionSelected.emit("getCustomer");
  }

  onSubActionPostCustomerSelected(){
    this.subActionSelected.emit("postCustomer");
  }

  onSubActionPutCustomerSelected(){
    this.subActionSelected.emit("putCustomer");
  }

  onSubActionDeleteCustomerSelected(){
    this.subActionSelected.emit("deleteCustomer");
  }

  onSubActionGetDeviceSelected(){
    this.subActionSelected.emit("getDevice");
  }

  onSubActionPostDeviceSelected(){
    this.subActionSelected.emit("postDevice");
  }

  onSubActionPutDeviceSelected(){
    this.subActionSelected.emit("putDevice");
  }

  onSubActionDeleteDeviceSelected(){
    this.subActionSelected.emit("deleteDevice");
  }

  onSubActionGetCustomerAndDevicesSelected(){
    this.subActionSelected.emit("getCustomerAndDevices");
  }

}
