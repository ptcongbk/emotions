import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  /**
   * status = 0 : init, 1 : getting result, 2 : done
   */
  info = {
    imageURLs : undefined,
    status: 0,
    active: {
      image: undefined,
      result: undefined,
      a_id: null
    }
  };

  run: any;

  constructor() { }

  ngOnInit() {
    this.fillData();
  }

  /**
   * Event select a image to Analysis suppose call to api and get result in active.reult
   */
  selectImage(data?: any) {
    this.info.active.a_id = data.id;
    this.info.status = 1;
    // get result here
    this.info.active.image = data;
    this.runningMan(100, () => {
      this.info.active.result = {
        tree: {
          name: 'Root',
          // active: 1,
          children: [
            {
              name: 'Person',
              active: 1,
              children: [
                {
                  name: '',
                  active: 1,
                  children: [
                    {
                      name: 'Close-up',
                      active: 1,
                      children: [
                        {
                          name: 'Provocative',
                          active: 1,
                        },
                        {
                          name: 'Not Provocative'
                        }
                      ]
                    },
                    {
                      name: 'Not Close-up'
                    }
                  ]
                },
                {
                  name: '',
                  active: 0,
                  children: [
                    {
                      name: 'Beach/Pool',
                      active: 0,
                      children: [
                        {
                          name: 'Bikini',
                          active: 0,
                        },
                        {
                          name: 'Not Bikini',
                          active: 0,
                        }
                      ]
                    },
                    {
                      name: 'Not Beach',
                      active: 0,
                    }
                  ]
                },
                {
                  name: '',
                  active: 1,
                  children: [
                    {
                      name: 'Family',
                      active: 1,
                    },
                    {
                      name: 'Not Family',
                      active: 0,
                    }
                  ]
                }
              ]
            },
            {
              name: 'Not Person',
              active: 0,
            },
            {
              name: 'NSFW',
              active: 0,
            }
          ]
        }
      };
    });
    // console.log(this.info.active.result);
    // done!
    this.info.status = 2;
  }

  /**
   * random active
   */

  sl() {
    this.info.active.result = {
      tree: {
        name: 'Root',
        // active: 1,
        children: [
          {
            name: 'Person',
            active: Math.floor(Math.random() * 2),
            children: [
              {
                name: '',
                active: Math.floor(Math.random() * 2),
                children: [
                  {
                    name: 'Close-up',
                    active: Math.floor(Math.random() * 2),
                    children: [
                      {
                        name: 'Provocative',
                        active: Math.floor(Math.random() * 2),
                      },
                      {
                        name: 'Not Provocative'
                      }
                    ]
                  },
                  {
                    name: 'Not Close-up'
                  }
                ]
              },
              {
                name: '',
                active: Math.floor(Math.random() * 2),
                children: [
                  {
                    name: 'Beach/Pool',
                    active: Math.floor(Math.random() * 2),
                    children: [
                      {
                        name: 'Bikini',
                        active: Math.floor(Math.random() * 2),
                      },
                      {
                        name: 'Not Bikini',
                        active: Math.floor(Math.random() * 2),
                      }
                    ]
                  },
                  {
                    name: 'Not Beach',
                    active: Math.floor(Math.random() * 2),
                  }
                ]
              },
              {
                name: '',
                active: Math.floor(Math.random() * 2),
                children: [
                  {
                    name: 'Family',
                    active: Math.floor(Math.random() * 2),
                  },
                  {
                    name: 'Not Family',
                    active: Math.floor(Math.random() * 2),
                  }
                ]
              }
            ]
          },
          {
            name: 'Not Person',
            active: Math.floor(Math.random() * 2),
          },
          {
            name: 'NSFW',
            active: Math.floor(Math.random() * 2),
          }
        ]
      }
    };
  }

  /****
   * Run tree
   */
  runningMan(time?: any, callback?: () => void) {
    if (time === undefined) {
      time = 100;
    }
    this.run = setInterval(() => {
      time --;
      if (time <= 0) {
        clearInterval(this.run);
        callback();
      } else {
        this.sl();
      }
    }, 10);
  }

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
  }

}
