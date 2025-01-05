import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../types/Customer";
import {Device} from "../types/Device";

@Injectable({
  providedIn: 'root'
})
export class CustomerCareBackendService {

  constructor(private httpClient: HttpClient) {
  }

  getCustomer(customerSsn: string) {
    const encodedCustomerSsn = encodeURIComponent(customerSsn);
    this.httpClient.get(`http://localhost:8081/customer/findBySsn?ssn=${encodedCustomerSsn}`)
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  postCustomer(customer: Customer) {
    this.httpClient.post(`http://localhost:8081/customer`, customer)
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  putCustomer(customerSsn: string, customerAddress: string) {
    const encodedCustomerSsn = encodeURIComponent(customerSsn);
    const encodedCustomerAddress = encodeURIComponent(customerAddress);
    this.httpClient.put(`http://localhost:8081/customer?ssn=${encodedCustomerSsn}&address=${encodedCustomerAddress}`, "")
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  deleteCustomer(customerSsn: string) {
    const encodedCustomerSsn = encodeURIComponent(customerSsn);
    this.httpClient.delete(`http://localhost:8081/deleteCustomer?ssn=${encodedCustomerSsn}`)
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  getDevice(code: string) {
    const encodedCode = encodeURIComponent(code);
    this.httpClient.get(`http://localhost:8081/device/findByCode?code=${encodedCode}`)
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  postDevice(device: Device) {
    this.httpClient.post(`http://localhost:8081/device`, device)
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  putDevice(deviceCode: string, deviceState: string, deviceColor: string) {
    const encodedDeviceCode = encodeURIComponent(deviceCode);
    const encodedDeviceState = encodeURIComponent(deviceState);
    const encodedDeviceColor = encodeURIComponent(deviceColor);
    this.httpClient.put(`http://localhost:8081/device?code=${encodedDeviceCode}&state=${encodedDeviceState}&color=${encodedDeviceColor}`, "")
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  deleteDevice(deviceCode: string) {
    const encodedDeviceCode = encodeURIComponent(deviceCode);
    this.httpClient.delete(`http://localhost:8081/deleteDevice?code=${encodedDeviceCode}`)
      .subscribe((dataReceived) => console.log(dataReceived));
  }

  getCustomerAndDevices(customerSsn: string) {
    const encodedCustomerSsn = encodeURIComponent(customerSsn);
    this.httpClient.get(`http://localhost:8081/customerAndDevices?customerSsn=${encodedCustomerSsn}`)
      .subscribe((dataReceived) => console.log(dataReceived));
  }

}
