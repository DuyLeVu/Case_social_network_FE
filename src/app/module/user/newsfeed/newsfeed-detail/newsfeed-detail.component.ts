import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model/user";
import {FriendRelationService} from "../../../../service/friend-relation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../../model/post";
import {PostService} from "../../../../service/post.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-newsfeed-detail',
  templateUrl: './newsfeed-detail.component.html',
  styleUrls: ['./newsfeed-detail.component.css']
})
export class NewsfeedDetailComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;
  listFriend!: User[];
  listPost!: Post[];
  postOfFriend!: Post;
  usernameFriend: string | undefined;
  constructor(private friendRelationService: FriendRelationService,
              private postService : PostService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    // @ts-ignore
    this.currentUser = localStorage.getItem("currentUser")
    console.log(this.currentUser);
    this.idUser = JSON.parse(this.currentUser).id;
    console.log(this.idUser);
    }

  ngOnInit(): void {
    this.friendRelationService.getAllFriend(this.idUser + "").subscribe(result => {
      this.listFriend = result;
      console.log(result);
    }, error => {
      console.log(error)
    });
    for (let i = 0; i<this.listFriend?.length; i++){
      this.postService.findPostByIdFriend(i+"").subscribe(result => {
        this.postOfFriend = result;
        console.log(result);
        this.listFriend.push(this.postOfFriend)
      }, error => {
        console.log(error)
      });;
    }
    console.log(this.listPost)
  }


}
