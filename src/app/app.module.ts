import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUserModule } from './create-user/create-user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreateUserModule,
    RouterModule.forRoot([
      {
        path: '', loadChildren: () => import('./create-user/create-user.module')
          .then(m => m.CreateUserModule)
      },
      {
        path: '' , loadChildren: () => import('./user/user.module')
          .then(m => m.UserModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
