import { Component, OnInit } from '@angular/core';
import {Post} from "../../../../model/post";
import {PostService} from "../../../../service/post.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post!: Post;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) { }
  postForm :FormGroup =this.fb.group({
    content:new FormControl(),
    status:new FormControl(),
  })

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this.postService.findById(id).subscribe(result => {
        this.post = result
        console.log(result)
      })
      })
    this.post={
      content:'',
      status:'',
    }
  }
  update(){
    const post=this.postForm.value;
    this.postService.updatePostProfile(this.post.id,post).subscribe(()=>{
      alert("Sửa thành công ")
      this.router.navigate(["/cities"])

    })
    }
}
