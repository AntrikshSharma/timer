import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.sass'
})
export class Dashboard {

  defaultTime: number = 60
  time: number = this.defaultTime;
  interval: number;
  timerRunning: boolean = false;


  increaseInterval: number;
  decreaseInterval: number;


  startTimer() {

    if (!this.time) {
      this.time = this.defaultTime
    }
    let audio = new Audio()
    audio.src = "/dune-scream.mp3"
    audio.load();
    audio.play();

    this.timerRunning = true;
    this.interval = setInterval(() => {
      if (this.time <= 0) {

        let audio = new Audio()
        audio.src = "/sigma.mp3"
        audio.load();
        audio.play();

        clearInterval(this.interval);
        this.timerRunning = false;
      } else {
        this.time -= 1;
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.interval);
    this.timerRunning = false;
    this.interval = null;
    this.resetTime();
  }

  pauseTime() {
    clearInterval(this.interval);
    this.timerRunning = false;
    this.interval = null;
  }

  resetTime() {
    this.time = this.defaultTime;
  }


  increase() {
    if (this.increaseInterval) {
      return
    }

    this.increaseInterval = setInterval(() => {
      this.time += 1;
    }, 150)
  }

  stopIncrease() {
    if (this.increaseInterval) {
      clearInterval(this.increaseInterval);
      this.increaseInterval = null
    }
  }

  increaseOne() {
    this.time += 1;
  }

  decreaseOne() {
    if (this.time > 0) {
      this.time -= 1
    }
  }

  stopDecrease() {
    if (this.decreaseInterval) {
      clearInterval(this.decreaseInterval);
      this.decreaseInterval = null
    }
  }

  decrease() {
    if (this.decreaseInterval) {
      return
    }
    this.decreaseInterval = setInterval(() => {
      if (this.time > 0) {
        this.time -= 1;
      }
    }, 150)
  }
}
