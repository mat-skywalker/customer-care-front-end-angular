import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";

@Component({
  selector: 'delete-customer-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './delete-customer-form.component.html',
  styleUrl: './delete-customer-form.component.css'
})
export class DeleteCustomerFormComponent {

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handleDeleteCustomer(customerSsn: string) {
    this.customerCareBackendService.deleteCustomer(customerSsn);
  }

}
