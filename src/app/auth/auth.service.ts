import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AppComponent } from '../app.component';
import { LoginForm, RegisterForm } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false
  constructor(private router: Router) { }

  // register
  register(form: RegisterForm){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in

      this.router.navigate(['login'])
      const user = userCredential.user;

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  // login
  login(form: LoginForm){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in
      this.isAuthenticated = true
      this.router.navigate([''])
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })

  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

}
