import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PutDeviceFormComponent} from './put-device-form.component';

describe('PutDeviceFormComponent', () => {
  let component: PutDeviceFormComponent;
  let fixture: ComponentFixture<PutDeviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutDeviceFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PutDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
