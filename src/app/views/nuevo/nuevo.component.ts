import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalData } from 'src/app/core/interfaces/personal-data';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  // mensaje
  message: string = '';
  // estado de la petición
  status: string = '';
  // modelo de datos
  model: PersonalData;
  // formulario reactivo
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    // creación del formulario reactivo
    this.model = new PersonalData('', 0, 0);
    this.reactiveForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      salario: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      edad: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.model.nombre = this.reactiveForm.controls['nombre'].value;
    this.model.salario = this.reactiveForm.controls['salario'].value;
    this.model.edad = this.reactiveForm.controls['edad'].value;

    // llamada al servicio
    /* this.employeeService.addEmployee().subscribe(
      (res) => {
        if (res.status === 'success') {
          this.status = 'success';
          this.message = 'El empleado se creó correctamente';
        } else {
          this.status = 'error';
          this.message = 'La conexión con la API ha fallado. Por favor inténtelo de nuevo';
        }
      }
    ); */

  }

  getNombre() {
    return this.reactiveForm.get('nombre');
  }

  getSalario() {
    return this.reactiveForm.get('salario');
  }

  getEdad() {
    return this.reactiveForm.get('edad');
  }
  get reactiveFormStatus() {
    return this.reactiveForm
  }

}
