import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-clock-time',
  standalone: false,
  templateUrl: './clock-time.html',
  styleUrl: './clock-time.sass'
})
export class ClockTime implements OnInit {
  rxTime = new Date();
  subscription: Subscription;

  ngOnInit() {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
