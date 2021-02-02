import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    ){ }

  ngOnInit(): void { }

  navigateToCreateUser(){
    this.router.navigate(['create-user'])
  }
  
  navigateToAllUsers(){
    this.router.navigate(['users'])
  }

}
