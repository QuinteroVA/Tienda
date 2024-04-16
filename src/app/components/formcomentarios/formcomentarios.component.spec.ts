import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcomentariosComponent } from './formcomentarios.component';

describe('FormcomentariosComponent', () => {
  let component: FormcomentariosComponent;
  let fixture: ComponentFixture<FormcomentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcomentariosComponent]
    });
    fixture = TestBed.createComponent(FormcomentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
