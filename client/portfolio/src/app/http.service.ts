import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  myname: any;

  constructor(private http: HttpClient) {}
  ROOT_URL = "http://localhost:4566";

  saveName(obj) {
    return this.http.post(this.ROOT_URL + "/api/db/saveUserName", obj);
  }
}
