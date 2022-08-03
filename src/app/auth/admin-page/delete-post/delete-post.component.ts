import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../../shared/post-model";
import {PostService} from "../../../shared/post.service";
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  posts!: Array<PostModel> ;

  constructor(private postService: PostService,public adminService: AdminService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }
  ngOnInit(): void {
  }

  public searchPost(key: string): void {
    const results: PostModel[] = [];
    for (const post of this.posts) {
      if (post.postName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || post.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || post.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(post);
      }
    }
    if (results.length === 0 || !key) {
      this.postService.getAllPosts().subscribe(post => {
        this.posts = post;
      });
    }
    this.posts = results;
  }


  public DeletePost(postName: string): void {
    this.adminService.deletePost(postName)
      .subscribe({
        next: (responce:void) =>{
          console.log(responce)
        },
        error: (HttpErrorResponse)=>{
          alert((HttpErrorResponse))
        }
      })
  }

}
