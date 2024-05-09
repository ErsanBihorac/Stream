import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnInit, OnDestroy {
  public darkmode$: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  subscription?: Subscription;

  ngOnInit(): void {
    const theme = new Observable((subscriber) => {
      subscriber.next('Hello Observable');
      subscriber.complete();
    });

    this.subscription = theme.subscribe({
      next: (x) => console.log(x),
      error: (err) => console.error('something wrong occured: ', err),
      complete: () => console.log('done'),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log('destroyed');
  }

}
