import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {}

  // obtenemos los empleados
  getEmployees(): Observable<any> {
    return this.httpClient.get(environment.apiUrl);
  }

  // añaadir un nuevo empleado
  addEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post(environment.apiUrl, `?create=${JSON.stringify(employee)}`);
  }
}
