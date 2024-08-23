import { Component } from '@angular/core';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  emailIsValid: boolean = false;
  buttonTitle = 'Continuar';
  checkEmail(
    input: HTMLInputElement,
    event: Event,
    password: HTMLInputElement
  ) {
    event.preventDefault();
    if (!input.value) return;
    this.emailIsValid = input.validity.valid;
    if (this.emailIsValid) {
      this.buttonTitle = 'Iniciar Sesión';
      password.className = 'password';
      return;
    } else {
      password.className = 'hidden';
      this.buttonTitle = 'Continuar';
      password.value = '';
    }
    
    console.log(this.emailIsValid);
  }
}
