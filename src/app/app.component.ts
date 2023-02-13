import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { app } from "./firebase.config";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  ngOnInit(): void {
    app
  }

  constructor(private auth: AuthService) {}


  isAuthenticated(){
    return this.auth.isAuthenticated
  }

  logout(){
    this.auth.logout()
  }
}
