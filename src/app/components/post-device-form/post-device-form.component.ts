import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";
import {Device} from "../../types/Device";

@Component({
  selector: 'post-device-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './post-device-form.component.html',
  styleUrl: './post-device-form.component.css'
})
export class PostDeviceFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handlePostDevice(deviceState: string, deviceColor: string) {
    let device = new Device();
    device.state = deviceState;
    device.color = deviceColor;

    this.customerCareBackendService.postDevice(device);
  }

}
