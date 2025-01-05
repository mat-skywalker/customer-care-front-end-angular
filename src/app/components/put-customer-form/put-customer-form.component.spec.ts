import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PutCustomerFormComponent} from './put-customer-form.component';

describe('PutCustomerFormComponent', () => {
  let component: PutCustomerFormComponent;
  let fixture: ComponentFixture<PutCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutCustomerFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PutCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
