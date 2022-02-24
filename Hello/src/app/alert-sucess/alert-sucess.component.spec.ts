import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSucessComponent } from './alert-sucess.component';

describe('AlertSucessComponent', () => {
  let component: AlertSucessComponent;
  let fixture: ComponentFixture<AlertSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSucessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
