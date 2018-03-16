import { Component, OnInit } from '@angular/core';

import { List } from 'linqts';

@Component({
  selector: 'app-face-emotion',
  templateUrl: './face-emotion.component.html',
  styleUrls: ['./face-emotion.component.css']
})
export class FaceEmotionComponent implements OnInit {

  info = {
    imageURLs: [],
    active: {
      status: -1,
      result: undefined,
      a_id: null
    },
    imageResults: []
  };

  constructor() { }

  ngOnInit() {
    this.fillData();
  }

  /**
   * Event select a image
   * @param data Image selected (url ,id)
   */

  selectImage(data?: any) {
    // Turn on spinner
    this.info.active.status = 0;
    this.info.active.a_id = data.id;
    // fetch API
    for (let temp = 0; temp < this.info.imageResults.length; temp++) {
      if (this.info.imageResults[temp].id === data.id) {
        this.info.active.result = this.info.imageResults[temp];
        break;
      }
    }
    console.log(this.info.active.result);
    // If done stop spinner
    this.info.active.status = 1;
    // Need send data to server via API
  }

  /**
   * Use to get data from server
   */
  fillData() {
    this.info.imageURLs = [
      {
        id: 1,
        url: 'https://s-media-cache-ak0.pinimg.com/736x/a5/7d/c6/a57dc60a78185c98b57ba1a23f9f8bab.jpg'
      },
      {
        id: 2,
        url: 'http://i2.mirror.co.uk/incoming/article83278.ece/ALTERNATES/s1200/theresa-may-delivers-her-address-on-the-third-day-of-the-conservative-party-conference-pic-reuters-504673602.jpg'
      },
      {
        id: 3,
        url: 'http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-migrant-G20-644717.jpg'
      },
      {
        id: 4,
        url: 'http://cdn.images.express.co.uk/img/dynamic/1/590x/secondary/Theresa-May-slaps-time-limit-on-detention-of-pregnant-women-in-immigration-custody-515355.jpg'
      },
      {
        id: 5,
        url: 'https://www.askideas.com/media/20/Funny-Sad-Face-Baby-Image.jpg'
      },
      {
        id: 6,
        url: 'https://ak9.picdn.net/shutterstock/videos/18478699/thumb/1.jpg'
      },
      {
        id: 7,
        url: 'http://i.dailymail.co.uk/i/pix/2015/12/27/02/2FA0919300000578-0-image-a-51_1451184103475.jpg'
      },
      {
        id: 8,
        url: 'http://i.dailymail.co.uk/i/pix/2016/01/24/20/308A4C9F00000578-3414721-image-a-5_1453668210110.jpg'
      }
    ];

    // Suppose we have a list result from server
    this.info.imageResults = [
      {
        id: 1,
        url: 'assets/faces/tmpxpr1ep9z_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmpxpr1ep9z_face0.jpg',
            emotions: {
                happiness: 0.9,
                surprise: 0.1,
                neutral: 0,
                sadness: 0,
                fear: 0,
                anger: 0
            }
          },
          {
            url: 'assets/faces/tmpxpr1ep9z_face1.jpg',
            emotions: {
              happiness: 0.8,
              surprise: 0.1,
              neutral: 0,
              sadness: 0,
              fear: 0,
              anger: 0
            }
          },
          {
            url: 'assets/faces/tmpxpr1ep9z_face2.jpg',
            emotions: {
              happiness: 0.8,
              surprise: 0.1,
              neutral: 0,
              sadness: 0,
              fear: 0,
              anger: 0
            }
          },
          {
            url: 'assets/faces/tmpxpr1ep9z_face3.jpg',
            emotions: {
              happiness: 0.8,
              surprise: 0.1,
              neutral: 0,
              sadness: 0,
              fear: 0,
              anger: 0
            }
          },
          {
            url: 'assets/faces/tmpxpr1ep9z_face4.jpg',
            emotions: {
              happiness: 0.8,
              surprise: 0.1,
              neutral: 0,
              sadness: 0,
              fear: 0,
              anger: 0
            }
          },
          {
            url: 'assets/faces/tmpxpr1ep9z_face5.jpg',
            emotions: {
              happiness: 0.8,
              surprise: 0.1,
              neutral: 0,
              sadness: 0,
              fear: 0,
              anger: 0
            }
          }
        ]
      },
      {
        id: 2,
        url: 'assets/faces/tmpzvp95oef_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmpzvp95oef_face0.jpg',
            emotions: {
              happiness: 0.02,
              surprise: 0.21,
              neutral: 0.56,
              sadness: 0.08,
              fear: 0.03,
              anger: 0.11
            }
          }
        ]
      },
      {
        id: 3,
        url: 'assets/faces/tmpr34r41iq_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmpr34r41iq_face0.jpg',
            emotions: {
              happiness: 0.02,
              surprise: 0.30,
              neutral: 0.29,
              sadness: 0.05,
              fear: 0.05,
              anger: 0.29
            }
          }
        ]
      },
      {
        id: 4,
        url: 'assets/faces/tmp8g3j0vc1_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmp8g3j0vc1_face0.jpg',
            emotions: {
              happiness: 0.02,
              surprise: 0.10,
              neutral: 0.48,
              sadness: 0.31,
              fear: 0.05,
              anger: 0.09
            }
          }
        ]
      },
      {
        id: 5,
        url: 'assets/faces/tmp5d2q2fa2_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmp5d2q2fa2_face0.jpg',
            emotions: {
              happiness: 0.02,
              surprise: 0.30,
              neutral: 0.29,
              sadness: 0.05,
              fear: 0.05,
              anger: 0.29
            }
          }
        ]
      },
      {
        id: 6,
        url: 'assets/faces/tmpawvnos0f_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmpawvnos0f_face0.jpg',
            emotions: {
              happiness: 0.02,
              surprise: 0.30,
              neutral: 0.29,
              sadness: 0.05,
              fear: 0.05,
              anger: 0.29
            }
          }
        ]
      },
      {
        id: 7,
        url: 'assets/faces/tmp7xkfkswk_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmp7xkfkswk_face0.jpg',
            emotions: {
              happiness: 0.02,
              surprise: 0.30,
              neutral: 0.29,
              sadness: 0.05,
              fear: 0.05,
              anger: 0.29
            }
          }
        ]
      },
      {
        id: 8,
        url: 'assets/faces/tmpr34r41iq_faces.jpg',
        faces: [
          {
            url: 'assets/faces/tmp5v0npwz0_face0.jpg',
            emotions: {
              happiness: 0.02,
              surprise: 0.30,
              neutral: 0.29,
              sadness: 0.05,
              fear: 0.05,
              anger: 0.29
            }
          }
        ]
      }
    ];
  }

}
