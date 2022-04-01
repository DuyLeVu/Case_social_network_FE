import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterLoginComponent} from "../login-register/register-login/register-login.component";
import {ListPostComponent} from "./components/list-post/list-post.component";
import {EditPostComponent} from "./components/edit-post/edit-post.component";
import {PostComponent} from "./components/post/post.component";

const routes: Routes = [
  {
    path :'detail',
    component: PostComponent,
    children:[{
      path:'list-post',
      component: ListPostComponent
    }]
  },
  {
    path :'edit-post',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
