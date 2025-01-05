import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GetCustomerAndDevicesFormComponent} from './get-customer-and-devices-form.component';

describe('GetCustomerAndDevicesFormComponent', () => {
  let component: GetCustomerAndDevicesFormComponent;
  let fixture: ComponentFixture<GetCustomerAndDevicesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCustomerAndDevicesFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetCustomerAndDevicesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
