import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";

@Component({
  selector: 'get-device-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './get-device-form.component.html',
  styleUrl: './get-device-form.component.css'
})
export class GetDeviceFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handleGetDevice(deviceCode: string) {
    this.customerCareBackendService.getDevice(deviceCode);
  }
}
