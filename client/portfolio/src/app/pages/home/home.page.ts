import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  user: any;

  constructor(private router: Router, private _http: HttpService) {}

  ngOnInit() {
    this.user = this._http.myname;
  }
}
