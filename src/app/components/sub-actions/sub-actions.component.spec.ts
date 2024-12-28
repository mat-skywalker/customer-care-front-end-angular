import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubActionsComponent } from './sub-actions.component';

describe('SubActionsComponent', () => {
  let component: SubActionsComponent;
  let fixture: ComponentFixture<SubActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
