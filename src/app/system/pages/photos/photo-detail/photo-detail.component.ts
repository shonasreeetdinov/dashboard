import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  photos: any[] = [];
  photoId: any;
  photo:any;

  constructor(public apiService: ApiService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getAllPhotos().subscribe((res:any) => {
      this.photos = res
      this.photoId = this.activateRoute.snapshot.paramMap.get('id');
      this.photo = this.photos.find(x => x.id == this.photoId)
    })
  }

}
