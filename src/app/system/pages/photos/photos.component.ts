import {AfterViewInit, Component} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements AfterViewInit {

  POSTS: any;
  page:number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5,10,15,20];

  constructor(public apiService: ApiService) { }

  ngAfterViewInit() {
  this.postList()
  }

  postList():void {
    this.apiService.getAllPhotos().subscribe((res) => {
      this.POSTS = res
    })
  }

  onTableDataChange(event:any) {
    this.page = event;
    this.postList()
  }

  onTableSizeChange(event:any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList()
  }


}
