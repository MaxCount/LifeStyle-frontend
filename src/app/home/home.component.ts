import { Component, OnInit } from '@angular/core';
import {PostModel} from "../shared/post-model";
import {PostService} from "../shared/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts!: Array<PostModel> ;

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
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
  ngOnInit(): void {
  }

}
