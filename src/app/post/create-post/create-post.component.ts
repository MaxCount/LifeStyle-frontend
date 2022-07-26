import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from './create-post.payload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm!: FormGroup;
  postPayload: CreatePostPayload;

  constructor(private router: Router, private postService: PostService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName')!.value;
    this.postPayload.url = this.createPostForm.get('url')!.value;
    this.postPayload.description = this.createPostForm.get('description')!.value;

    this.postService.createPost(this.postPayload).subscribe((_data: any) => {
      this.router.navigateByUrl('/');
    }, (error: any) => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
