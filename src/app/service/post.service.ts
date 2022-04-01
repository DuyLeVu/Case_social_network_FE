import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/api/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
    getAll(idUser: string | undefined):Observable<Post[]>{
    return this.httpClient.get<Post[]>(API_URL+`/search?q=${idUser}`);
  }

  create(post: Post): Observable<Post>{
    return this.httpClient.post<Post>(API_URL,post);
  }
  findById(id:string): Observable<Post>{
    return this.httpClient.get<Post>(API_URL+`/${id}`);
  }
  updatePostProfile(id:string,post:Post):Observable<Post>{
    return this.httpClient.put<Post>(API_URL+`/${id}`,post);
  }
  deleteFindById(id:string){
    return this.httpClient.delete<Post>(API_URL+`/${id}`);
  }

  findPostByIdFriend(id:string){
    return this.httpClient.get<Post>(API_URL + `/postOfFriends/${id}`)
  }
}
