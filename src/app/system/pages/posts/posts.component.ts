import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";


export interface UserData{
  id: string;
  userId: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements AfterViewInit{

  allPosts: any;
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource!:MatTableDataSource<UserData>;

  constructor(public apiService: ApiService,
              private _liveAnnouncer: LiveAnnouncer,
              private router: Router) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.apiService.getAllPost().subscribe(res => {
      this.allPosts = res
      this.dataSource = new MatTableDataSource(this.allPosts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
