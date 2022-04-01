import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";
import {FriendRelationService} from "../../../service/friend-relation.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../../service/post.service";
declare var $:any;
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;
  userDetail!: User;
  listFriend!: User[];
  listFriendRequest!: User[];
  usernameFriend: string | undefined;
  postForm: FormGroup = new FormGroup({
    id: new FormControl(),
    content: new FormControl(''),
    imageList: new FormControl(''),
    status: new FormControl(''),
  })
  constructor(private userService: UserService,
              private friendRelationService: FriendRelationService,
              private router: Router,
              private  postService: PostService) {
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
    this.friendRelationService.getAllFriend(this.idUser + "").subscribe(result => {
      this.listFriend = result;
      console.log(result);
    }, error => {
      console.log(error)
    })
    this.friendRelationService.findTop5RequestById(this.idUser + "").subscribe(result => {
      this.listFriendRequest = result;
      console.log(result);
    }, error => {
      console.log(error)
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/'])
  }

  createPost() {
    console.log(this.postForm.value)
    let post = {
      user: {
        id: this.idUser
      },
      content: this.postForm.value.content,

      status: this.postForm.value.status,
    }
    console.log(post);
    // @ts-ignore
    this.postService.create(post).subscribe(() => {
      $('#createPost').modal('show')
      setTimeout( () => {$('#createPost').modal('hide');},3000);
      // this.ngOnInit()

      }

    )
    this.router.navigate(['/post/detail/list-post']);
  }

  acceptFriend(idUserRequest: string | undefined, usernameFriend: string | undefined) {
    console.log(idUserRequest);
    this.usernameFriend = usernameFriend;
    // @ts-ignore
    this.friendRelationService.acceptFriend(this.idUser, idUserRequest).subscribe(() => {
      $('#confirmRequest').modal('show')
      setTimeout( () => {$('#confirmRequest').modal('hide');},3000);
      this.ngOnInit();
    });
  }

}
