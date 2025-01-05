import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GetCustomerFormComponent} from "../get-customer-form/get-customer-form.component";
import {PostCustomerFormComponent} from "../post-customer-form/post-customer-form.component";
import {PutCustomerFormComponent} from "../put-customer-form/put-customer-form.component";
import {DeleteCustomerFormComponent} from "../delete-customer-form/delete-customer-form.component";
import {GetDeviceFormComponent} from "../get-device-form/get-device-form.component";
import {PostDeviceFormComponent} from "../post-device-form/post-device-form.component";
import {PutDeviceFormComponent} from "../put-device-form/put-device-form.component";
import {DeleteDeviceFormComponent} from "../delete-device-form/delete-device-form.component";
import {
  GetCustomerAndDevicesFormComponent
} from "../get-customer-and-devices-form/get-customer-and-devices-form.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    GetCustomerFormComponent,
    PostCustomerFormComponent,
    PutCustomerFormComponent,
    DeleteCustomerFormComponent,
    GetDeviceFormComponent,
    PostDeviceFormComponent,
    PutDeviceFormComponent,
    DeleteDeviceFormComponent,
    GetCustomerAndDevicesFormComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input({required: true})
  subActionSelected;

}
