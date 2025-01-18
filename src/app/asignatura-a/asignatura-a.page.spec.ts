import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturaAPage } from './asignatura-a.page';

describe('AsignaturaAPage', () => {
  let component: AsignaturaAPage;
  let fixture: ComponentFixture<AsignaturaAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
