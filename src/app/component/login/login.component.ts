import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../../services/service.user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private _userService :UserService,
    private _flash :FlashMessagesService,
    private _router :Router
  ) { }

  ngOnInit() {}
  onLogin(){

    if(!this.username || !this.password) {
      console.log('All fields are required');
      this._flash.show('All fields are required', { cssClass: 'alert-danger', timeout: 800});
      return false;
    }
    

    const user = {
      username: this.username,
      password: this.password
    }

    this._userService.auth(user).subscribe(
      resp => {
        if (!resp.success) {
          console.log(resp.message);
          this._flash.show(resp.message, { cssClass: 'alert-danger', timeout: 800});
          return false;
        }

        this._userService.saveUserDate(resp.token, resp.user);
        this._router.navigate(['/home']);
      }
    );

  }

}
