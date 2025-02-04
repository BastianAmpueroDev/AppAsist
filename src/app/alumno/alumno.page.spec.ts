import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPage } from './alumno.page';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ConsumoapiService } from '../services/consumoapi.service';

describe('AlumnoPage', () => {
  let component: AlumnoPage;
  let fixture: ComponentFixture<AlumnoPage>; 
  let consumoApiServiceSpy: jasmine.SpyObj<ConsumoapiService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const consumoApiSpy = jasmine.createSpyObj('ConsumoapiService', ['obtenerAlumnoPorCursoPorProfesor']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [AlumnoPage],
      providers: [
        { provide: ConsumoapiService, useValue: consumoApiSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnoPage);
    component = fixture.componentInstance;
    consumoApiServiceSpy = TestBed.inject(ConsumoapiService) as jasmine.SpyObj<ConsumoapiService>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to asignatura-a page with correct data', () => {
    const asignaturaData = { id: 1, nombre: 'Matemáticas Avanzadas', profesor: 'Dr. John Doe', horario: 'Lunes y Miércoles 10:00 AM - 11:30 AM' };
    consumoApiServiceSpy.obtenerAlumnoPorCursoPorProfesor.and.returnValue(of(asignaturaData));

    component.scanQRCode();
    fixture.detectChanges();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/asignatura-a'], { queryParams: { asignatura: JSON.stringify(asignaturaData) } });
  });
});
