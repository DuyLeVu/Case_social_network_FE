import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FriendNearbyComponent } from './friend-relation/friend-nearby/friend-nearby.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import {FriendRequestComponent} from "./friend-relation/friend-request/friend-request.component";
import { ListFriendComponent } from './friend-relation/list-friend/list-friend.component';
import {AppRoutingModule} from "../../app-routing.module";
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { NewsfeedDetailComponent } from './newsfeed/newsfeed-detail/newsfeed-detail.component';
import { TimelineAboutComponent } from './user-detail/timeline-about/timeline-about.component';
import { TimelineFriendsComponent } from './user-detail/timeline-friends/timeline-friends.component';
import { MutualFriendComponent } from './people-detail/mutual-friend/mutual-friend.component';
import { PeopleDetailAboutComponent } from './people-detail/people-detail-about/people-detail-about.component';
import { PeopleDetailFriendsComponent } from './people-detail/people-detail-friends/people-detail-friends.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    EditPasswordComponent,
    FriendNearbyComponent,
    NewsfeedComponent,
    FriendRequestComponent,
    ListFriendComponent,
    UserDetailComponent,
    PeopleDetailComponent,
    NewsfeedDetailComponent,
    TimelineAboutComponent,
    TimelineFriendsComponent,
    MutualFriendComponent,
    PeopleDetailAboutComponent,
    PeopleDetailFriendsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
