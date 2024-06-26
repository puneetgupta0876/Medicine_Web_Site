import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediineComponent } from './view-mediine.component';

describe('ViewMediineComponent', () => {
  let component: ViewMediineComponent;
  let fixture: ComponentFixture<ViewMediineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMediineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMediineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
