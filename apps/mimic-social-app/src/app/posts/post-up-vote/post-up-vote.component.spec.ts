import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpVoteComponent } from './post-up-vote.component';

describe('PostUpVoteComponent', () => {
  let component: PostUpVoteComponent;
  let fixture: ComponentFixture<PostUpVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostUpVoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUpVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
