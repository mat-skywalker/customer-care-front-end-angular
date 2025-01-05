import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";
import {Customer} from "../../types/Customer";

@Component({
  selector: 'post-customer-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './post-customer-form.component.html',
  styleUrl: './post-customer-form.component.css'
})
export class PostCustomerFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handlePostCustomer(customerName: string, customerSurname: string, customerSsn: string, customerAddress: string, deviceId: string) {
    let customer = new Customer();
    customer.name = customerName;
    customer.surname = customerSurname;
    customer.ssn = customerSsn;
    customer.address = customerAddress;
    customer.device_id = deviceId;
    this.customerCareBackendService.postCustomer(customer);
  }

}
