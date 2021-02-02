import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/create-user/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initUser();
  }

  private initUser(){
    this.activatedRoute.params
      .subscribe(params => {
        this.userService.getSingleUser(params.id)
          .subscribe(value => {
            this.user = value
          })
      })
  }

}
