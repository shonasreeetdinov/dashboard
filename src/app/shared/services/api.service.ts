import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiPosts = 'https://jsonplaceholder.typicode.com/posts'
  apiPhotos = 'https://jsonplaceholder.typicode.com/photos'
  apiUsers = 'https://jsonplaceholder.typicode.com/users'


  constructor(private http:HttpClient) { }

  getPosts( pageSize:number){
    return this.http.get(`${this.apiPosts}?_start=0&_limit=${pageSize}`)
  }

  getPhotos(pageSize:number){
    return this.http.get(`${this.apiPhotos}?_start=0&_limit=${pageSize}`)
  }

  getAllPost() {
    return this.http.get(this.apiPosts)
  }

  getAllPhotos() {
    return this.http.get(this.apiPhotos)
  }

  getAllUsers() {
    return this.http.get(this.apiUsers)
  }

}

