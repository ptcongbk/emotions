import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEmotionsComponent } from './text-emotions.component';

describe('TextEmotionsComponent', () => {
  let component: TextEmotionsComponent;
  let fixture: ComponentFixture<TextEmotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEmotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
