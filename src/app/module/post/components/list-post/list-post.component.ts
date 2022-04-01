import {Component, OnInit} from '@angular/core';
import {Post} from "../../../../model/post";
import {PostService} from "../../../../service/post.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {User} from "../../../../model/user";
import {UserService} from "../../../../service/user.service";

declare var $: any

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;
  post: Post[] = []
  post2: Post = {};
  idPostEdit: string | undefined;
  idUserPostEdit: string | undefined;
  userDetail!: User;
  postForm: FormGroup = new FormGroup({
    id: new FormControl(),
    content: new FormControl(''),
    imageList: new FormControl(''),
    status: new FormControl(''),
  })
  postEditForm: FormGroup = new FormGroup({
    postId: new FormControl(),
    postIdUser: new FormControl(),
    content1: new FormControl(''),
    status1: new FormControl(''),
  })

  constructor(private userService: UserService,
              private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.currentUser = localStorage.getItem("currentUser")
    console.log(this.currentUser);
    this.idUser = JSON.parse(this.currentUser).id;
    console.log(this.idUser);
    this.userService.userDetail(this.idUser + "").subscribe(result => {
      this.userDetail = result;
      console.log(result);
    }, error => {
      console.log(error)
    });
    this.postService.getAll(this.idUser).subscribe(result => {
        this.post = result;
        console.log(result);
      }, error => {
        console.log(error);
      }
    )
    // this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
    //   let id = paraMap.get('id')
    //   console.log(id)
    //   // @ts-ignore
    //   this.cityService.findById(id).subscribe(result => {
    //     this.post = result
    //     console.log(result)
    //   })
    // })
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
        this.ngOnInit()

      }
    )
  }

  update(id: string | undefined, idUser: string | undefined) {
    $('#formEdit ').modal('show');

    this.idPostEdit = id;
    this.idUserPostEdit = idUser;
    // setTimeout( () => {$('#requestSuccess').modal('hide');},3000);
    //   const post= this.postForm.value;
    //   this.postService.updatePostProfile(post.id, post).subscribe(() => {
    //     alert("Sửa thành công ")
    //   })
  }

  editPost() {

    const post = this.postEditForm.value;
    console.log(this.postEditForm.value)
    console.log(this.idPostEdit);
    console.log(this.idUserPostEdit);
    let postEdit = {
      user: {
        id: this.postEditForm.value.postIdUser,
      },
      content: this.postEditForm.value.content1,

      status: this.postEditForm.value.status1,
    }
    console.log(postEdit);
    // @ts-ignore
    this.postService.updatePostProfile(this.postEditForm.value.postId, postEdit).subscribe(() => {
      $('#editPost').modal('show')
      setTimeout( () => {$('#editPost').modal('hide');},3000);
      this.ngOnInit()
      }
    )
  }

  deletePost(id: string | undefined) {
    console.log(id)
    if (confirm("yes")) {
      // @ts-ignore
      this.postService.deleteFindById(id).subscribe(() => {
          alert("xong")
          this.ngOnInit();
        }
      )
    }
  }
}

