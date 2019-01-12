import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AdminService } from '../../services/service.admin';

@Component({
  selector: 'app-addline',
  templateUrl: './addline.component.html',
  styleUrls: ['./addline.component.scss']
})
export class AddlineComponent implements OnInit {
  username: String;
  name: string;
  price: number;
  nameline:String;
  lat:Number;
  lang:Number;
  
  constructor(private _userService :AdminService,
    private _flash :FlashMessagesService,
    private _router :Router) { }

  ngOnInit() {}
  onSubmit(){

    if(!this.username || !this.name || !this.price || !this.lat || !this.lang ||!this.nameline ) {
      console.log('All fields are required');
      this._flash.show('All fields are required', { cssClass: 'alert-danger', timeout: 800});
      return false;
    }
    

    const line = {
users: [{username: this.username}] ,
name:  this.name,
price:  this.price,
lineStops: [{name:this.nameline},{lat:this.lat},{lang:this.lang}]

    }

    this._userService.addline(line).subscribe(
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
