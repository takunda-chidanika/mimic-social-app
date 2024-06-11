import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDownVoteComponent } from './post-down-vote.component';

describe('PostDownVoteComponent', () => {
  let component: PostDownVoteComponent;
  let fixture: ComponentFixture<PostDownVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDownVoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDownVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
