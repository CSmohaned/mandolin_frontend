import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminService } from '../../services/service.admin';
@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.scss']
})
export class AddbusComponent implements OnInit {
username: String;
name:  String ;
plate:  Number;
licenceId: Number;
licenceExpiryDate: Date;

  constructor(private _userService :AdminService,
    private _flash :FlashMessagesService,
    private _router :Router) { }

  ngOnInit() {}
  onSubmit(){

    if(!this.username || !this.name || !this.plate || !this.licenceId || !this.licenceExpiryDate) {
      console.log('All fields are required');
      this._flash.show('All fields are required', { cssClass: 'alert-danger', timeout: 800});
      return false;
    }
    

    const bus = {
      username:this.username ,
      name:  this.name,
      plate:  this.plate,
      licenceId: this.licenceId,
      licenceExpiryDate: this.licenceExpiryDate,
    }

    this._userService.addbus(bus).subscribe(
      resp => {
        if(!resp.success) {
          console.log(resp.message);
          this._flash.show(resp.message, { cssClass: 'alert-danger', timeout: 800});
          return false;
        }

        console.log('succses' );
        this._router.navigate(['/home']);
      }
    );
  }


}
