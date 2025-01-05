import {Component} from '@angular/core';
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'put-device-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './put-device-form.component.html',
  styleUrl: './put-device-form.component.css'
})
export class PutDeviceFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handlePutDevice(deviceCode: string, deviceState: string, deviceColor: string) {
    this.customerCareBackendService.putDevice(deviceCode, deviceState, deviceColor);
  }

}
