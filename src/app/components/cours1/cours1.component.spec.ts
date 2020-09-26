import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cours1Component } from './cours1.component';

describe('Cours1Component', () => {
  let component: Cours1Component;
  let fixture: ComponentFixture<Cours1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cours1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cours1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
