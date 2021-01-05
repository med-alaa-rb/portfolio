import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../../http.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage {
  constructor(private router: Router, private _http: HttpService) {}

  submitName(el) {
    this._http.myname = el.toUpperCase();
    this._http.saveName({ el }).subscribe((res) => {
      res ? this.router.navigateByUrl("/home") : alert("kindly add your name");
    });
  }
}
