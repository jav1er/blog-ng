import { Component, OnInit } from '@angular/core';
import { CustomValidatorService } from '../../providers/CustomValidator/custom-validator.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private CustomValidator: CustomValidatorService
  ) {}

  public ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({
      registeredOn: today,
      name: [name.toLowerCase(), Validators.required],
      email: [
        'john@angular.io',
        [
          Validators.required,
          // Validators.email,
          Validators.pattern(/^[0-9]/),
          Validators.pattern(/1$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(minPassLength),
          CustomValidatorService.validateNumber,
          CustomValidatorService.validateDollar,
        ],
      ],
    });
  }

  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }

  public getError(controlName: string) {
    const control = this.formGroup.get(controlName);
  //const control = this.formGroup.controls[controlName]
    if (control.touched && control.errors) {
      //return control.errors

      // if (control.errors.pattern.requiredPattern == '/^[0-9]/') {
      //   return 'debe tener un numero';
      // }

      // if (control.errors.required) {
      //   console.log('es requerido');

      //   return 'el campo es requerido';
      // }

      return JSON.stringify(control.errors);
    }
  }
}
