import {Component, Input, OnInit} from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from "../auth/shared/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {PostModel} from "../shared/post-model";
import {PostService} from "../shared/post.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  isLoggedIn !: boolean;
  username!: string;
  authority!: boolean;
  admin!: Observable<boolean>;
  public posts: PostModel[] ;



  constructor(private authService: AuthService, private router: Router, private postService: PostService) {
    this.posts = [];
  }


  ngOnInit() {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.authService.admin.subscribe((data:Observable<boolean>) => this.admin = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();
    this.admin =this.authService.isAdmin(this.username);
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile/' + this.username);
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    })
  }
  goToAdminPage(){
    this.authService.isAdmin(this.username).subscribe({
      next: (responce:boolean) => {
          if (responce){
              this.router.navigateByUrl('/admin-page').then(() => {
                window.location.reload();
              })
          }
      }

    })
  }
}
