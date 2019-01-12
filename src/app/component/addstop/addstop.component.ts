import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminService } from '../../services/service.admin';
@Component({
  selector: 'app-addstop',
  templateUrl: './addstop.component.html',
  styleUrls: ['./addstop.component.scss']
})
export class AddstopComponent implements OnInit {
  name:  String ;
  lat:  Number;
  lang: Number;
  constructor(private _userService :AdminService,
    private _flash :FlashMessagesService,
    private _router :Router) { }

  ngOnInit() {}
  onSubmit(){
  if(!this.name || !this.lat || !this.lang ) {
    console.log('All fields are required');
    this._flash.show('All fields are required', { cssClass: 'alert-danger', timeout: 800});
    return false;
  }
  

  const stop = {
    
name:  this.name,
late:  this.lat,
lang: this.lang
  }

  this._userService.addstop(stop).subscribe(
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
