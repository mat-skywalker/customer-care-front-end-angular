import {Component} from '@angular/core';
import {CustomerCareBackendService} from "../../services/customer-care-backend.service";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {CustomerAndDevices} from "../../types/CustomerAndDevices";

@Component({
  selector: 'get-customer-and-devices-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './get-customer-and-devices-form.component.html',
  styleUrl: './get-customer-and-devices-form.component.css'
})
export class GetCustomerAndDevicesFormComponent {

  customerAndDevices$ : Observable<CustomerAndDevices>;
  submit = false;

  constructor(private customerCareBackendService: CustomerCareBackendService) {
  }

  handleGetCustomerAndDevices(customerSsn: string) {
    this.customerAndDevices$ = this.customerCareBackendService.getCustomerAndDevices(customerSsn);
    console.log(this.customerAndDevices$);
  }

  handleSubmit() {
    this.submit = true;
  }

}
