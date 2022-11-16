import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  users: any[] = [];
  userId:any;
  user:any;

  posts: any[] = [];
  postsUser:any[] = [];

  @ViewChild('uiElementPosts', { static: false }) public uiElementPosts!: ElementRef;

  constructor(public apiService: ApiService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((res:any) => {
      this.users = res
      this.userId = this.activateRoute.snapshot.paramMap.get('id');
      this.user = this.users.find(x => x.id == this.userId);

      this.apiService.getAllPost().subscribe((res:any) => {
        this.posts = res
        this.posts.forEach((v:any) => {
          if(v.userId == this.userId) {
            this.postsUser.push(v)
          }
        })
      })
    });

  }


}
