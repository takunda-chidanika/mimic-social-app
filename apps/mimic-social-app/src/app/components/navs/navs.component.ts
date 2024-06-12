import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap, take } from 'rxjs';
import { selectLoggedUser$ } from '../../../store/auth/auth.selector';
import { LoggedUser } from '@mimic-social-org/shared';
import { AsyncPipe, NgIf } from '@angular/common';
import { loggedUser } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-navs',
  standalone: true,
  imports: [
    IonicModule,
    RouterOutlet,
    RouterLink,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './navs.component.html',
  styleUrl: './navs.component.css'
})
export class NavsComponent implements OnInit{
  loggedUser$: Observable<LoggedUser>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loggedUser$ = this.store.select(selectLoggedUser$);
  }
}
