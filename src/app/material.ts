import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatIconModule,
     MatCardModule,
     MatInputModule,
    MatFormFieldModule],

  exports: [MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatIconModule,
     MatCardModule,
     MatInputModule,
    MatFormFieldModule],
})
export class MaterialModule { }