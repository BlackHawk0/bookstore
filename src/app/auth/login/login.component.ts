import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interface/auth';
import { AuthService } from '../auth.service';

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
  isLoading: boolean = false;

  constructor(private auth: AuthService){}
  submit(){
    this.auth.login
  }

}
