import {NgModule} from "@angular/core";
import {ApiService} from "../shared/services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {SystemRoutingModule} from "./system-routing.module";
import {PostsComponent} from "./pages/posts/posts.component";
import {PhotosComponent} from "./pages/photos/photos.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SystemComponent} from "./system.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import { PostDetailComponent } from './pages/posts/post-detail/post-detail.component';
import { UserDetailComponent } from './pages/posts/user-detail/user-detail.component';
import { PhotoDetailComponent } from './pages/photos/photo-detail/photo-detail.component';

@NgModule({
  declarations: [
    SystemComponent,
    DashboardComponent,
    PhotosComponent,
    PostsComponent,
    SidenavComponent,
    PostDetailComponent,
    UserDetailComponent,
    PhotoDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiService
  ],
  entryComponents: [PostDetailComponent]
})

export class SystemModule {}
