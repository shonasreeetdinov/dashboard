import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SystemComponent} from "./system.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {PhotosComponent} from "./pages/photos/photos.component";
import {PostsComponent} from "./pages/posts/posts.component";
import {PostDetailComponent} from "./pages/posts/post-detail/post-detail.component";
import {UserDetailComponent} from "./pages/posts/user-detail/user-detail.component";
import {PhotoDetailComponent} from "./pages/photos/photo-detail/photo-detail.component";

const routes: Routes = [
  {path: '', component: SystemComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'photos', component: PhotosComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'posts/:id', component: PostDetailComponent},
      {path: 'user/:id', component: UserDetailComponent},
      {path: 'photos/:id', component: PhotoDetailComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}
