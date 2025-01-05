import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostCustomerFormComponent} from './post-customer-form.component';

describe('PostCustomerFormComponent', () => {
  let component: PostCustomerFormComponent;
  let fixture: ComponentFixture<PostCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCustomerFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
