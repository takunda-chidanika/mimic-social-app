import { Component, inject } from '@angular/core';
import { Post, PostCreate, PostsService, PostUpdate } from '@mimic-social-org/shared';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent {
  protected postService = inject(PostsService);
  protected postUpdateRequest: PostUpdate = {id:0, title: '', content: '', published: false };
  protected post: Post | undefined;

  protected postUpdateForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl(''),
    content: new FormControl(''),
    published: new FormControl('')
  });

  updateANewPost() {
    this.postUpdateRequest.id = this.postUpdateForm.value.id ?? 0;
    this.postUpdateRequest.title = this.postUpdateForm.value.title ?? '';
    this.postUpdateRequest.content = this.postUpdateForm.value.content ?? '';
    this.postUpdateRequest.published = Boolean(this.postUpdateForm.value.published ?? 'true');

    this.postService.updateAPost(this.postUpdateRequest).subscribe(
      post => {
        this.post = post;
      },
      error => {
        console.log(error);
      }
    );
  }
}
