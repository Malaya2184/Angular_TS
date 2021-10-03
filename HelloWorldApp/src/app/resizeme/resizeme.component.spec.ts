import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizemeComponent } from './resizeme.component';

describe('ResizemeComponent', () => {
  let component: ResizemeComponent;
  let fixture: ComponentFixture<ResizemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
