import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteCustomerFormComponent} from './delete-customer-form.component';

describe('DeleteCustomerFormComponent', () => {
  let component: DeleteCustomerFormComponent;
  let fixture: ComponentFixture<DeleteCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
