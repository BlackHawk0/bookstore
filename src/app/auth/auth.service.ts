import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false
  isLoading: boolean = false;
  passwordMatched: boolean = false

  constructor(private router: Router) { }

  // register
  register(form: RegisterForm){

    if (this.isLoading) return;

    this.isLoading = true;

    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.router.navigate(['login'])
      const user = userCredential.user;

    })
    .catch((error) => {
      this.isAuthenticated = false
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(()=>{this.isLoading = false})
  }

  // login
  login(form: LoginForm){
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.isAuthenticated = true
      this.router.navigate([''])

    })
    .catch((error) => {
      this.isAuthenticated = false
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(() => (this.isLoading = false));

  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      console.log(error);

    });
  }

}
