import {Component} from '@angular/core';
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'delete-device-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './delete-device-form.component.html',
  styleUrl: './delete-device-form.component.css'
})
export class DeleteDeviceFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handleDeleteDevice(deviceCode: string) {
    this.customerCareBackendService.deleteDevice(deviceCode);
  }
}
