import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/create-user/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[] = []

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initUserArray()
  }

  private initUserArray(){
    this.userService.getAllUsers()
      .subscribe(value => {
        this.users = value
      })
  }

  navigateToMoreInfo(user){
    this.router.navigate(['users', user.id])
  }

  editUser(user){
    this.router.navigate(['edit-user', user.id])
  }

  deleteUser(user){
    this.userService.deleteCurrentUser(user.id)
      .subscribe(() => {
        this.initUserArray();
      })
  }


}
