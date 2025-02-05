import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private authenticated = false;
  private apiUrl = 'http://localhost:5000'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { }

  // Método para autenticar usuario
  authenticateUser(user: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { user, password });
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.authenticated;
  }

  // Método para iniciar sesión
  login(): void {
    this.authenticated = true;
  }

  // Método para cerrar sesión
  logout(): void {
    this.authenticated = false;
  }

  // Método para guardar los datos del usuario (opcional)
  setUserData(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData)); // Guarda en localStorage o donde prefieras
  }

  // Método para obtener los datos del usuario
  getUserData(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
