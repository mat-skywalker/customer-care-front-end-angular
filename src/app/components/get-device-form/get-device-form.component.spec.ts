import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GetDeviceFormComponent} from './get-device-form.component';

describe('GetDeviceFormComponent', () => {
  let component: GetDeviceFormComponent;
  let fixture: ComponentFixture<GetDeviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeviceFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GetDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
