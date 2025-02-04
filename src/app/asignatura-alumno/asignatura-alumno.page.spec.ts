import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaAlumnoPage } from './asignatura-alumno.page';

describe('AsignaturaAlumnoPage', () => {
  let component: AsignaturaAlumnoPage;
  let fixture: ComponentFixture<AsignaturaAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
