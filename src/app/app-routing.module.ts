import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {ViewPostComponent} from "./post/view-post/view-post.component";
import {UserProfileComponent} from "./auth/user-profile/user-profile.component";
import {AuthGuard} from "./auth/auth.guard";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {AdminPageComponent} from "./auth/admin-page/admin-page/admin-page.component";
import {ListOfUsersComponent} from "./auth/admin-page/list-of-users/list-of-users.component";
import {DeletePostComponent} from "./auth/admin-page/delete-post/delete-post.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'admin-page', component: AdminPageComponent},
  { path: 'admin-page/list-of-users', component:  ListOfUsersComponent},
  { path: 'admin-page/delete-post', component: DeletePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
