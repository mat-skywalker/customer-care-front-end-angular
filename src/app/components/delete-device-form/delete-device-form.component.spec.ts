import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteDeviceFormComponent} from './delete-device-form.component';

describe('DeleteDeviceFormComponent', () => {
  let component: DeleteDeviceFormComponent;
  let fixture: ComponentFixture<DeleteDeviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDeviceFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeleteDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
