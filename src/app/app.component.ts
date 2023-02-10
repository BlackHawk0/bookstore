import { Component } from "@angular/core";
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
}
