import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from '../../providers/CustomValidator/custom-validator.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('estas en el formulario');
    this.buildForm();
  }

  // ngDoCheck() {
  //   console.log('ocurrio un cambio en el don');
  // }

  private buildForm() {
    const name = 'Jarvis';
    const minPassLength = 4;
    this.userForm = this.formBuilder.group({
      name: [
        name.toLowerCase(),
        // Validators.required
      ],
      lastname: [
        'rangel',
        [
          // Validators.required,
          // // Validators.email,
          // Validators.pattern(/^[0-9]/),
          // Validators.pattern(/1$/),
        ],
      ],
      bio: [
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

  validate() {
    if (this.userForm.invalid) {
      console.log('invalido');
      console.log(this.userForm);
    }
    if (this.userForm.valid) {
      console.log('formulario valido');
      console.log(this.userForm);
    }
  }
}
