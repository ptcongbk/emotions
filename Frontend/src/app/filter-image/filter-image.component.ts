import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import * as Collections from 'typescript-collections';
import { List } from 'linqts';

@Component({
  selector: 'app-filter-image',
  templateUrl: './filter-image.component.html',
  styleUrls: ['./filter-image.component.css']
})
export class FilterImageComponent implements OnInit {

  info = {
    Classifier: [{
      text: 'None',
      value: 'none'
      },
      {
        text: 'Beach',
        value: 'beach'
      },
      {
        text: 'Family',
        value: 'family'
      },
      {
        text: 'Provocative',
        value: 'provocative'
      },
      {
        text: 'Person',
        value: 'person'
      },
      {
        text: 'Bikini',
        value: 'bikini'
      },
      {
        text: 'CloseUp',
        value: 'closeup'
      },
      {
        text: 'Gore',
        value: 'gore'
      }],
    status: '0',
    listImages: undefined,
    state: {
      sliderValue: 0,
      condition: {
        sortBy: 'oyotyHate',
        minValue: 0
      },
      listToShow: undefined
    },
    active: {
      status: -1,
      imageURL: null,
      result: undefined,
      a_id: null
    }
  };

  constructor(
    public http: HttpClient
  ) {
    this.fillData();
    // this.info.listImages;
    // console.log(this.info.listImages.getValue());
    this.updateListToShow();
    // this.http.get('data/sdata.json').map(res => { console.log(res); })
    //     .subscribe(data => {
    //       console.log(data);
    //     });
  }

  ngOnInit() {
  }

  updateListToShow() {
    this.info.state.listToShow = [];
    new List<any>(this.info.listImages)
      .OrderBy(sorter => sorter[this.info.state.condition.sortBy])
      .Where(r => r[this.info.state.condition.sortBy] >= this.info.state.condition.minValue)
      .ForEach(r => {
          this.info.state.listToShow.push(r);
      });
    console.log(this.info.state.listToShow);
  }

  changeSlicer(e?: any) {
    this.info.state.condition.minValue = e.value;
    this.updateListToShow();
  }

  changeClassifier(e?: any) {
    this.info.state.condition.sortBy = e.value;
    this.updateListToShow();
  }

  fillData() {
    this.info.listImages = [{
        id: 1,
        url: 'https://s-media-cache-ak0.pinimg.com/736x/a5/7d/c6/a57dc60a78185c98b57ba1a23f9f8bab.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'http://i2.mirror.co.uk/incoming/article83278.ece/ALTERNATES/s1200/theresa-may-delivers-her-address-on-the-third-day-of-the-conservative-party-conference-pic-reuters-504673602.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-migrant-G20-644717.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'https://www.askideas.com/media/20/Funny-Sad-Face-Baby-Image.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'https://68.media.tumblr.com/40862ea034b64adfb3d75426af892499/tumblr_okxr8cGy3e1untgrfo1_500.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'http://i.dailymail.co.uk/i/pix/2015/12/27/02/2FA0919300000578-0-image-a-51_1451184103475.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'https://ak9.picdn.net/shutterstock/videos/18478699/thumb/1.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'http://www.clevver.com/wp-content/uploads/2016/01/candice-accola-kat-graham-nina-dobrev-sad-happy-instagram-main.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'https://ak5.picdn.net/shutterstock/videos/7407499/thumb/1.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'https://s-media-cache-ak0.pinimg.com/originals/a9/a4/24/a9a4245cb3eb208ea2ad914e885dd1aa.jpg',
        df: 10,
        beach: 12,
        family: 11
      },
      {
        id: 1,
        url: 'http://www.freakingnews.com/pictures/21500/Monkey-with-Human-Eyes-21623.jpg',
        df: 10,
        beach: 12,
        family: 11
      }];
  }

}
