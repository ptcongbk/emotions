import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HateComponent } from './hate.component';

describe('HateComponent', () => {
  let component: HateComponent;
  let fixture: ComponentFixture<HateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
