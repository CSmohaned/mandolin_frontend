import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {

  constructor(private _http:Http) { }

  addbus(bus) {
    return this._http.post('http://localhost:3000/bus/add', bus)
      .map(resp => resp.json());
  }
  addstop(stop) {
    return this._http.post('http://localhost:3000/stop/add', stop)
      .map(resp => resp.json());
  }
  addline(line) {
    return this._http.post('http://localhost:3000/line/add', line)
      .map(resp => resp.json());
  }
}