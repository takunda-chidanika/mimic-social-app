import { Component, inject } from '@angular/core';
import { Post, PostsService } from '@mimic-social-org/shared';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostCreate } from '@mimic-social-org/shared';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { createAPost } from '../../../store/posts/posts.actions';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonicModule
  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  private store = inject(Store);
  protected postCreateRequest: PostCreate = { title: '', content: '', published: false };
  protected post: Post | undefined;

  protected postCreateForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    published: new FormControl('')
  });

  createANewPost() {
    this.postCreateRequest.title = this.postCreateForm.value.title ?? '';
    this.postCreateRequest.content = this.postCreateForm.value.content ?? '';
    this.postCreateRequest.published = Boolean(this.postCreateForm.value.published ?? 'true');

    this.store.dispatch(createAPost({request: this.postCreateRequest}))
  }
}
