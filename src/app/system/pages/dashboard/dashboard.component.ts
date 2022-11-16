import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  posts: any[]= [];
  allPosts: any;
  photos: any[]= [];
  allPhotos: any;
  totalCount=0;
  pageIndex=0;
  pageSize=10;

  @ViewChild('uiElementPosts', { static: false }) public uiElementPosts!: ElementRef;
  @ViewChild('uiElementPhotos', { static: false }) public uiElementPhotos!: ElementRef;

  constructor(public apiService: ApiService) { }

  public async ngOnInit(): Promise<void> {
    this.apiService.getAllPhotos().subscribe(res => {this.allPhotos = res})
    this.apiService.getAllPost().subscribe(res => {this.allPosts = res})
    await this.getPosts(this.pageSize);
    await this.getPhotos( this.pageSize)
    this.pageIndex +=1;
  }

  public async getPosts(pageSize:number){
    try {
      const response:any= await this.apiService.getPosts(pageSize).toPromise();

      this.posts = [...response]
      this.totalCount = response.totalCount;
    } catch (error) {
      console.log(error)
    }
  }

  public async getPhotos(pageSize:number){
    try {
      const response:any= await this.apiService.getPhotos(pageSize).toPromise();

      this.photos = [...response]
      this.totalCount = response.totalCount;
    } catch (error) {
      console.log(error)
    }
  }

  public async onScrollLoadPosts(){
    const nativeElement= this.uiElementPosts.nativeElement
    if(nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight  &&  this.posts.length !== this.totalCount){
      await this.getPosts(this.pageSize);
      this.pageIndex +=1;
      this.pageSize+=10
    }
  }

  public async onScrollLoadPhotos() {
    const nativeElement = this.uiElementPhotos.nativeElement
    if (nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight && this.photos.length !== this.totalCount) {
      await this.getPhotos( this.pageSize);
      this.pageSize += 10
    }
  }
}
