import {Component} from '@angular/core';
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'get-customer-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './get-customer-form.component.html',
  styleUrl: './get-customer-form.component.css'
})
export class GetCustomerFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handleGetCustomer(customerSsn: string) {
    this.customerCareBackendService.getCustomer(customerSsn);
  }

}
