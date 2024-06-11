import { Component, inject, Input } from '@angular/core';
import { PostsService } from '@mimic-social-org/shared';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-delete',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './post-delete.component.html',
  styleUrl: './post-delete.component.css'
})
export class PostDeleteComponent {
  protected postService = inject(PostsService);
  protected message = '';
  protected postDeleteForm = new FormGroup({
    id : new FormControl(0)
  });

  deleteAPost() {
    const postId = this.postDeleteForm.value.id ?? 0;
    this.postService.deleteAPost(postId).subscribe(
      message=>{
        this.message = message
      },
      error => {
        console.log(error);
      }
    )
  }
}
