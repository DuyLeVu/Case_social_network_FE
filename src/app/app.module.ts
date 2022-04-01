import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import { EditPostComponent } from './module/post/components/edit-post/edit-post.component';
import { ListPostComponent } from './module/post/components/list-post/list-post.component';
@NgModule({
  declarations: [
    AppComponent,
    EditPostComponent,
    ListPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
