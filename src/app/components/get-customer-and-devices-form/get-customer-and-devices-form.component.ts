import {Component} from '@angular/core';
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'get-customer-and-devices-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './get-customer-and-devices-form.component.html',
  styleUrl: './get-customer-and-devices-form.component.css'
})
export class GetCustomerAndDevicesFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handleGetCustomerAndDevices(customerSsn: string) {
    this.customerCareBackendService.getCustomerAndDevices(customerSsn);
  }
}
