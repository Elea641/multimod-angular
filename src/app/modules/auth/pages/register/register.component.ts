import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/email-validator';
import { passwordValidator } from '../../shared/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, passwordValidator]],
  })

    constructor(private fb: FormBuilder) {}

    onSubmit() {
      console.log(this.registerForm.value);
  }

}
