import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";

@Component({
  selector: 'put-customer-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './put-customer-form.component.html',
  styleUrl: './put-customer-form.component.css'
})
export class PutCustomerFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handlePutCustomer(customerSsn: string, customerAddress: string) {
    this.customerCareBackendService.putCustomer(customerSsn, customerAddress);
  }

}
