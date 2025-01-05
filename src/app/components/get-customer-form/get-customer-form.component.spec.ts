import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GetCustomerFormComponent} from './get-customer-form.component';

describe('GetCustomerFormComponent', () => {
  let component: GetCustomerFormComponent;
  let fixture: ComponentFixture<GetCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCustomerFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
