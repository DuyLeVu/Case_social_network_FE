import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  currentUser: any
  avatar: string = "";
  cover: string = "";
  url: string = "null";

  constructor(private router: Router,
              private userService: UserService,
  ) {
    if (localStorage.getItem('currentUser') == null) {
      this.router.navigate([''])
    }
    // @ts-ignore
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.avatar = this.currentUser.avatar;
    this.cover = this.currentUser.cover;
    this.userService.getUserProfile(this.currentUser.id).subscribe(result => {
      this.currentUser = result;
      localStorage.setItem('currentUser',JSON.stringify(result));
      this.avatar = this.currentUser.avatar;
      this.cover = this.currentUser.cover;
    }, error => {
      console.log(error);
    })

  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
