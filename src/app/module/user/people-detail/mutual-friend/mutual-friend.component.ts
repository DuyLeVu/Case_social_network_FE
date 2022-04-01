import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../../../service/user.service";
import {FriendRelationService} from "../../../../service/friend-relation.service";

declare var $: any;

@Component({
  selector: 'app-mutual-friend',
  templateUrl: './mutual-friend.component.html',
  styleUrls: ['./mutual-friend.component.css']
})
export class MutualFriendComponent implements OnInit {
  currentUser: any
  url: string = "null";
  mutualFriend: User[] | undefined;
  usernameFriend: string | undefined;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private friendRelationService: FriendRelationService
  ) {
    if (localStorage.getItem('currentUser') == null) {
      this.router.navigate([''])
    }
    // @ts-ignore
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const people = paramMap.get('id');

      this.friendRelationService.getListMutualFriend(this.currentUser.id + "", people + "").subscribe(result => {
        this.mutualFriend = result
        console.log(this.mutualFriend)
      }, error => {
        console.log(error);
      })
    });
  }

  ngOnInit(): void {
  }

  cancelRelationship(idFriend: string | undefined, username: string | undefined) {
    this.usernameFriend = username;
    // @ts-ignore
    this.friendRelationService.unFriend(this.currentUser.id, idFriend).subscribe(() => {
      $('#unFriendSuccess').modal('show')
      setTimeout(() => {
        $('#unFriendSuccess').modal('hide');
      }, 3000);
      this.ngOnInit();
      // this.router.navigate(['user/friends']);
    });
  }
}
