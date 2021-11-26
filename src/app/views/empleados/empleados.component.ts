import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/interfaces/employee';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  // estado de la petición
  status: string = '';

  // lista de empleados
  public empleados: Employee[] = [
    {
      id: 1,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      employee_age: 61,
      profile_image: ""},
    {
      id: 2,
      employee_name: "Garrett Winters",
      employee_salary: 170750,
      employee_age: 63,
      profile_image: ""},
    {
      id: 3,
      employee_name: "Ashton Cox",
      employee_salary: 86000,
      employee_age: 66,
      profile_image: ""
    }
    ];

  constructor(private employeeService: EmployeeService) {
    // obtenemos la lista de empleados
    this.employeeService.getEmployees().subscribe(
      (res) => {
        if (res.status === 'success') {
          // guardamos la lista de empleados
          this.empleados = res.data;
          this.status = res.status;

        } else {
          // mostramos el error
          this.status = 'error';

        }

        console.log(res);
      }
    );
  }


  ngOnInit(): void {
  }

}
