import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../../../service/user.service";
import {FriendRelationService} from "../../../../service/friend-relation.service";

@Component({
  selector: 'app-people-detail-about',
  templateUrl: './people-detail-about.component.html',
  styleUrls: ['./people-detail-about.component.css']
})
export class PeopleDetailAboutComponent implements OnInit {
  currentUser: any
  peopleDetail: any
  cover: string = "";
  url: string = "null";

  constructor(private router: Router,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
  ) {
    if (localStorage.getItem('currentUser') == null) {
      this.router.navigate([''])
    }
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const people = paramMap.get('id');
      this.userService.getUserProfile(people + "").subscribe(result => {
        // @ts-ignore
        this.peopleDetail = result;
        console.log(this.peopleDetail)
        this.cover = this.peopleDetail.cover;
        console.log(this.cover)
      }, error => {
        console.log(error);
      })
    });
  }

  ngOnInit(): void {
  }
}
