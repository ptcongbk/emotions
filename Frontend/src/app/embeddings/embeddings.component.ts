import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-embeddings',
  templateUrl: './embeddings.component.html',
  styleUrls: ['./embeddings.component.css']
})
export class EmbeddingsComponent implements OnInit {

  info = {
    mode : undefined,
    imageURLs: []
  };

  constructor() {
  }

  ngOnInit() {

    this.fetch();

    setInterval(() => {
      this.info.mode = !this.info.mode;
    }, 50);
  }

  fetch() {
    this.info.imageURLs = [
      {
        id: 1,
        url: 'https://i.ytimg.com/vi/mHHJza5Sl88/maxresdefault.jpg'
      }
    ];
  }

}
