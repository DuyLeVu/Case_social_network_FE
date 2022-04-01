import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FriendRelationService} from "../../../../service/friend-relation.service";
import {User} from "../../../../model/user";
import {FriendRelation} from "../../../../model/friend-relation";

declare var $: any;

@Component({
  selector: 'app-people-detail-friends',
  templateUrl: './people-detail-friends.component.html',
  styleUrls: ['./people-detail-friends.component.css']
})
export class PeopleDetailFriendsComponent implements OnInit {
  currentUser: any
  friendRelation: any;
  peopleFriend: User[] | undefined;
  usernameFriend: string | undefined;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private friendRelationService: FriendRelationService
  ) {
    if (localStorage.getItem('currentUser') == null) {
      this.router.navigate([''])
    }
    ;
    // @ts-ignore
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const people = paramMap.get('id');
      this.friendRelationService.findRelationByIdUserAndIdFriend(this.currentUser.id, people + "").subscribe(result => {
        this.friendRelation = result
        console.log(this.friendRelation)
      }, error => {
        console.log(error);
      });
      this.friendRelationService.getAllFriend(people + "").subscribe(result => {
        this.peopleFriend = result
        console.log(result)
      });
    });
    }
  ngOnInit():
    void {
  }

  notFriend() {
    $('#notFriend1').modal('show')
    setTimeout(() => {
      $('#notFriend').modal('hide');
    }, 3000);
    // this.router.navigate(["/user/people-detail/" + this.peopleId + '' + "/about/" + this.peopleId + '']);
  }

  // checkRelationship(idFriend:  string | undefined){
  //   let result2: string | undefined;
  //   this.friendRelationService.findRelationByIdUserAndIdFriend(this.currentUser.id, idFriend + "").subscribe(result => {
  //     let friendRelation1 = result
  //     console.log(friendRelation1);
  //     result2= friendRelation1.status;
  //   }, error => {
  //     console.log(error);
  //   });
  //   return result2;
  // }

  cancelRelationship(idFriend: string | undefined,
                     username: string | undefined) {
    this.usernameFriend = username;
    // @ts-ignore
    this.friendRelationService.unFriend(this.currentUser.id, idFriend).subscribe(() => {
      $('#unFriendSuccess').modal('show')
      setTimeout(() => {
        $('#unFriendSuccess').modal('hide');
      }, 3000);
      // this.ngOnInit();
      // this.router.navigate(['user/friends']);
    });
  }
}
