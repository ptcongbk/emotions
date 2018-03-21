import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceEmotionComponent } from './face-emotion.component';

describe('FaceEmotionComponent', () => {
  let component: FaceEmotionComponent;
  let fixture: ComponentFixture<FaceEmotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceEmotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceEmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
