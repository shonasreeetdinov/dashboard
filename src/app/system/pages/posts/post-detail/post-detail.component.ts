import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post:any;
  postId:any;
  posts:any[] = [];

  constructor(public apiService: ApiService,
              private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.apiService.getAllPost().subscribe((res:any) => {
      this.posts = res;
      this.postId = this.activateRoute.snapshot.paramMap.get('id');
      this.post = this.posts.find(x => x.id == this.postId)
    })

  }

}
