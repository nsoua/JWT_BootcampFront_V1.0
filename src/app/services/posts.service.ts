import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../Models'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private Http : HttpClient) { }

  getPosts():Observable<Post[]>
  {
    return this.Http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
