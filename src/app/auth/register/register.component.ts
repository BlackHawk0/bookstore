import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/interface/auth';

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

  onSumbit(){
    console.log(this.register.confirm_password);

  }

}
