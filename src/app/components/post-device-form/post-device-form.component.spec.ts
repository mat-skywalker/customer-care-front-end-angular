import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostDeviceFormComponent} from './post-device-form.component';

describe('PostDeviceFormComponent', () => {
  let component: PostDeviceFormComponent;
  let fixture: ComponentFixture<PostDeviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDeviceFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
