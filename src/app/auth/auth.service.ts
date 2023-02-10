import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(form: RegisterForm){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('user is logged in')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Incorrect details")
    });
  }

  login(form: LoginForm){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('user is logged in')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Incorrect details")
    });
  }

}
