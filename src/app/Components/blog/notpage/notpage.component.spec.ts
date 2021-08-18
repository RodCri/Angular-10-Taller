import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotpageComponent } from './notpage.component';

describe('NotpageComponent', () => {
  let component: NotpageComponent;
  let fixture: ComponentFixture<NotpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
