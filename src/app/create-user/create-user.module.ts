import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserService } from '../services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [UserService]
})
export class CreateUserModule { }
