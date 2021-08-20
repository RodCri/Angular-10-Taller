import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEscritoresComponent } from './lista-escritores.component';

describe('ListaEscritoresComponent', () => {
  let component: ListaEscritoresComponent;
  let fixture: ComponentFixture<ListaEscritoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEscritoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEscritoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
