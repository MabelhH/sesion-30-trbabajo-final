import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarprodComponent } from './registrarprod.component';

describe('RegistrarprodComponent', () => {
  let component: RegistrarprodComponent;
  let fixture: ComponentFixture<RegistrarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
