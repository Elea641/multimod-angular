import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/email-validator';
import { passwordValidator } from '../../shared/password-validator';
import { SignInForm } from '../../models/signInForm.model';
import { checkEqualityPasswordValidator } from '../../shared/checkEqualityPassword-validator';
import { AuthServiceService } from '../../shared/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  users: SignInForm[] = [];

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, emailValidator]),
    password: new FormControl('', Validators.compose([Validators.required, passwordValidator])),
    confirm_password: new FormControl('', [Validators.required]),
  }, 
  [
    checkEqualityPasswordValidator('password', 'confirm_password') 
  ] 
  );

  constructor(public authService: AuthServiceService) {}

  ngOnInit (): void {
    this.authService.getUsers().subscribe(usersList => {
      this.users = usersList;
      console.log("listuser",this.users);
    })
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log("faire quelque chose");
      return;
    }

    const signIn: SignInForm = {
      email: this.registerForm.get('email')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
      confirm_password: this.registerForm.get('confirm_password')?.value ?? '',
    };
    this.authService.postUser(signIn).subscribe(response => {
      console.log('Réponse de la requête:', response);
      
    }, error => {
      console.error('Erreur de la requête :', error);
    });
  }
}

