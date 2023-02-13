import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/interface/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  register: RegisterForm = {
    email: '',
    password: '',
    confirm_password: ''
  }

  passwordMatched: boolean = true;

  constructor(private auth: AuthService){}

  onSumbit(){
    this.auth.register(this.register)
  }

  isLoading() {
    return this.auth.isLoading;
  }

}
