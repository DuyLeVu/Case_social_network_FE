import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model/user";
import {UserService} from "../../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;
  userDetail!: User;
  constructor(private userService: UserService,
              private router: Router) {
    // @ts-ignore
    this.currentUser = localStorage.getItem("currentUser")
    console.log(this.currentUser);
    this.idUser = JSON.parse(this.currentUser).id;
    console.log(this.idUser);
  }

  ngOnInit(): void {
    this.userService.userDetail(this.idUser + "").subscribe(result => {
      this.userDetail = result;
      console.log(result);
    }, error => {
      console.log(error)
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
