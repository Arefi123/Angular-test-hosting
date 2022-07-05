import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialEventsComponent } from './especial-events.component';

describe('EspecialEventsComponent', () => {
  let component: EspecialEventsComponent;
  let fixture: ComponentFixture<EspecialEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
