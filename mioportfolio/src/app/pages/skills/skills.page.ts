import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../../http.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.page.html",
  styleUrls: ["./skills.page.scss"],
})
export class SkillsPage implements OnInit {
  user: any;
  arr: any = [
    { title: "nodeJs", img: "../../../assets/icon/nodeJs.jpg" },
    { title: "Angular", img: "../../../assets/icon/angular.png" },
    { title: "ionic 5", img: "../../../assets/icon/ionic.png" },
    { title: "expressJs", img: "../../../assets/icon/express.png" },
    { title: "jquery", img: "../../../assets/icon/jquery.png" },
    { title: "leaflet", img: "../../../assets/icon/leafletjs-card.png" },
    { title: "es6", img: "../../../assets/icon/es 6.jpg" },
    { title: "html5 css3", img: "../../../assets/icon/html5-css3.png" },
    { title: "React", img: "../../../assets/icon/reactjs.jpg" },
    { title: "mongoDb", img: "../../../assets/icon/mongoDb.png" },
    { title: "mysql", img: "../../../assets/icon/mysql.jpg" },
    { title: "typescript", img: "../../../assets/icon/typescript.png" },
    { title: "axios", img: "../../../assets/icon/axios.png" },
    { title: "codeWars", img: "../../../assets/icon/codewars.png" },
    { title: "Bootstrap", img: "../../../assets/icon/bootstrap.png" },
  ];

  constructor(private router: Router, private _http: HttpService) {}

  ngOnInit() {
    this.user = this._http.myname;
  }
}
