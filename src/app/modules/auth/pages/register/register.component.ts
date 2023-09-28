import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/email-validator';
import { passwordValidator } from '../../shared/password-validator';
import { SignInForm } from '../../models/signInForm.model';
import { checkEqualityPasswordValidator } from '../../shared/checkEqualityPassword-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, emailValidator]),
    password: new FormControl('', Validators.compose([Validators.required, passwordValidator])),
    confirmPassword: new FormControl('', [Validators.required]),
  }, 
  [
    checkEqualityPasswordValidator('password', 'confirmPassword') 
  ] 
  );

  onSubmit() {
    const signIn: SignInForm = {
      email: this.registerForm.get('email')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
      confirmPassword: this.registerForm.get('confirmPassword')?.value ?? '',
    };
    console.log(signIn);
  }
}

