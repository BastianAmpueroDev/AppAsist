import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {
  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*' 
    }) 
  };

  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts').pipe(
      retry(3),
    );
  }

  getData() {
    // Implement your API calls here
    return [];
  }

  obtenerAlumnoPorCursoPorProfesor(): Observable<any> {
    return this.http.get(this.apiURL + '/courses').pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  obtenerCursos(): Observable<any> {
    const cursos = [
      { id: 1, nombre: 'POO', codigo: 'APY1111', seccion: '010v' },
      { id: 2, nombre: 'LAA', codigo: 'APY2222', seccion: '011v' },
      { id: 3, nombre: 'SEE', codigo: 'APY3333', seccion: '012v' },
      { id: 4, nombre: 'JEE', codigo: 'APY4444', seccion: '013v' }
    ];
    return of(cursos);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return of([]);
  }
}
