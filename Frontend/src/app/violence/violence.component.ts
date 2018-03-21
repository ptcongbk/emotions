import { Component, OnInit } from '@angular/core';
import { randomBates } from 'd3-ng2-service/src/bundle-d3';
import { setInterval, clearInterval } from 'timers';

@Component({
  selector: 'app-violence',
  templateUrl: './violence.component.html',
  styleUrls: ['./violence.component.css']
})
export class ViolenceComponent implements OnInit {

  info = {
    mode : [true, true],
    imageURLs: [],
    active: {
      status: -1,
      imageURL: null,
      result: undefined,
      a_id: null
    }
  };

  run: any;

  constructor() { }

  ngOnInit() {
    this.fillData();
    // this.run = setInterval(() => {
    //   this.info.mode[0] = !this.info.mode;
    // }, 20);
    // this.runningMan();
  }

  runningMan (time?: any) {
    if (time === undefined) {
      time = 100;
    }
    this.run = setInterval(() => {
      if (time <= 0) {
        clearInterval(this.run);
      }
      console.log(time);
      this.info.mode[0] = !this.info.mode[0];
      this.info.mode[1] = !this.info.mode[1];
      time --;
    }, 20);
  }

  fillData() {
    this.info.imageURLs = [
      {
        id: 1,
        url: 'https://i.ytimg.com/vi/mHHJza5Sl88/maxresdefault.jpg'
      },
      {
        id: 2,
        url: 'https://s-media-cache-ak0.pinimg.com/originals/70/b5/0e/70b50e215fb3afd59c5e33be7f927a6c.jpg'
      },
      {
        id: 3,
        url: 'http://i.telegraph.co.uk/multimedia/archive/03543/paris1_3543389b.jpg'
      },
      {
        id: 4,
        url: 'http://i.telegraph.co.uk/multimedia/archive/03543/paris1_3543389b.jpg'
      },
      {
        id: 5,
        url: 'http://media.vocativ.com/photos/2015/07/ISIS-Child-Execute333063085.jpg'
      },
      {
        id: 6,
        url: 'http://www.vankirkpools.com/wp-content/uploads/2016/10/van-kirk-pools-best-selfie.jpg'
      },
      {
        id: 7,
        url: 'https://s-media-cache-ak0.pinimg.com/originals/1f/0a/7b/1f0a7b96f8d9e07672e29e454f5b1a2e.jpg'
      },
      {
        id: 8,
        url: 'http://i.dailymail.co.uk/i/pix/2016/01/24/20/308A4C9F00000578-3414721-image-a-5_1453668210110.jpg'
      }
    ];
  }

  selectImage(data?: any) {
    this.info.active.a_id = data.id;
    // if (this.info.active.status === -1) {
    //   this.info.active.status = 4;
    // } else {
    //   clearInterval(this.run);
    //   this.info.active.status = Math.floor(Math.random() * 2) + 1;
    // }
    // console.log(this.info);
    this.info.active.status = 2;
    this.runningMan(50);
    // data result
    this.info.mode[0] = true;
    this.info.mode[1] = false;
  }

}
