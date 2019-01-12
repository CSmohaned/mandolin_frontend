import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/service.user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _userService :UserService,
    private _router :Router
) { }

  ngOnInit() {}
  onLogOutClicked(){
    this._userService.logOut();
    this._router.navigate(['/login']);
    return false;
  }

}
