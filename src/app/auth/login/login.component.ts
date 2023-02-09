import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interface/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: ''
  }

  submit(){
    alert(this.form.email)
  }

}
