import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './auth/login/login.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxWebstorageModule} from "ngx-webstorage";
import { HomeComponent } from './home/home.component';

import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TokenInterceptor} from "./token-interceptor";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {EditorModule} from "@tinymce/tinymce-angular";
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { AdminPageComponent } from './auth/admin-page/admin-page/admin-page.component';
import { ListOfUsersComponent } from './auth/admin-page/list-of-users/list-of-users.component';
import { DeletePostComponent } from './auth/admin-page/delete-post/delete-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostTileComponent,
    CreatePostComponent,
    ViewPostComponent,
    VoteButtonComponent,
    UserProfileComponent,
    SideBarComponent,
    AdminPageComponent,
    ListOfUsersComponent,
    DeletePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    NgbModule,
    FormsModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
