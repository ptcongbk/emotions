import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material';
import { AnnotationService } from '../../services/annotation.service';
import { setInterval, clearInterval } from 'timers';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent implements OnInit {

  constructor(private _annotationService: AnnotationService,
    private _snaclBar: MatSnackBar
  ) { }

  info = {
    listTweets: [],
    result: undefined,
    active: '',
    pagination: {
      total: this._annotationService.getTotal(),
      index: 0
    },
    rs: null,
    temp: 0,
    err: false,
    userInput: ''
  };

  ok = false;

  run: any;

  ngOnInit() {
    this.info.listTweets = this._annotationService.getTweets(this.info.pagination.index, 50);
  }

  navigate(offset) {
    this.info.pagination.index += offset;
    this.info.listTweets = this._annotationService.getTweets(this.info.pagination.index, 50);
  }

  selectTweet(tweets?: any) {
    let tweet = '';
    if (tweets === undefined) {
      tweet = this.info.userInput;
    } else {
      tweet = tweets['Tweet'];
    }
    this.info.active = tweet;
    this.runrun();
    this.info.temp = 0;
    this._snaclBar.open('Starting analysis please wait ...', 'Ok', {
      duration: 1000
    });
    this._annotationService.getCategories(tweet)
    .subscribe(res => {
      console.log(res);
      this.info.rs = res;
      this.stopstop();
      this.info.result = {tree: this.deserialize(this.info.rs)};
    });
    // this.runningMan(100, () => this.getResult(tweet));
  }

  // getResult(tweet) {
  //   console.log('121');
  //   // this.info.result.tree = this.info.temp;
  // }
  /**
   * Map data receive to tree
   */

  deserialize(data: any) {
    const tree = {
      name: 'Root',
      // active: 1,
      children: [
        {
          name: 'Scenic',
          key: 'scenic',
          // tslint:disable-next-line:max-line-length
          active: Number(data['island']) + Number(data['submarine_creature']) + Number(data['beach']) + Number(data['valley']) + Number(data['waterfall']) + Number(data['forest']),
          children: [
            {
              name: 'Marine species',
              key: 'submarine_creature',
              active: data['submarine_creature']
            },
            {
              name: 'Beaches',
              key: 'beach',
              active: data['beach']
            },
            {
              name: 'Islands',
              key: 'island',
              active: data['island']
            },
            {
              name: 'Valleys',
              key: 'valley',
              active: data['valley']
            },
            {
              name: 'Waterfalls',
              key: 'waterfall',
              active: data['waterfall']
            },
            {
              name: 'Forests',
              key: 'forest',
              active: data['forest']
            }
          ]
        },
        {
          name: 'Air tours',
          active: Number(data['scenic_flight_tour']) + Number(data['sky_diving']),
          key: 'air_tours',
          children: [
            {
              name: 'Sccenic flight tours',
              key: 'scenic_flight_tour',
              active: data['scenic_flight_tour']
            },
            {
              name: 'Sky diving',
              key: 'sky_diving',
              active: data['sky_diving']
            }
          ]
        },
        {
          name: 'Water-based activities',
          key: 'surface_tours',
          // tslint:disable-next-line:max-line-length
          active: Number(data['sailing']) + Number(data['cruise']) + Number(data['boat_tour']) + Number(data['whale_watching']) + Number(data['jet_tour']) + Number(data['fishing_charter']),
          children: [
            {
              name: 'Sailing',
              key: 'sailing',
              active: data['sailing']
            },
            {
              name: 'Cruise',
              key: 'cruise',
              active: data['cruise']
            },
            {
              name: 'Boat tour',
              key: 'boat_tour',
              active: data['boat_tour']
            },
            {
              name: 'Whale watching',
              key: 'whale_watching',
              active: data['whale_watching']
            },
            {
              name: 'Jet tours',
              key: 'jet_tour',
              active: data['jet_tour']
            },
            {
              name: 'Fishing charters',
              key: 'fishing_charter',
              active: data['fishing_charter']
            },
          ]
        },
        {
          name: 'Underwater tours',
          key: 'undersea_tours',
          active: Number(data['snorkeling_tour']) + Number(data['scuba_diving']),
          children: [
            {
              name: 'Snorkelling tour',
              key: 'snorkeling_tour',
              active: data['snorkeling_tour']
            },
            {
              name: 'Diving',
              key: 'scuba_diving',
              active: data['scuba_diving']
            }
          ]
        },
        {
          name: 'Activities',
          key: 'activities',
          active: Number(data['hiking']) + Number(data['swimming']) + Number(data['horse_riding']) + Number(data['surfing']),
          children: [
            {
              name: 'Hiking',
              key: 'hiking',
              active: data['hiking']
            },
            {
              name: 'Swimming',
              key: 'swimming',
              active: data['swimming']
            },
            {
              name: 'Horse riding',
              key: 'horse_riding',
              active: data['horse_riding']
            },
            {
              name: 'Surfing',
              key: 'surfing',
              active: data['surfing']
            }
          ]
        },
        {
          name: 'General',
          key: 'general',
          active: data['general']
        }
      ]
    };
    return tree;
  }

  /**
   * config random path of tree
   */
  sl() {
    this.info.result = {
      tree: {
      name: 'Root',
      // active: 1,
      children: [
        {
          name: 'Scenic',
          key: 'scenic',
          // tslint:disable-next-line:max-line-length
          active: Math.floor(Math.random() * 2),
          children: [
            {
              name: 'Marine species',
              key: 'submarine_creature',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Beaches',
              key: 'beach',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Islands',
              key: 'island',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Valleys',
              key: 'valley',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Waterfalls',
              key: 'waterfall',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Forests',
              key: 'forest',
              active: Math.floor(Math.random() * 2)
            }
          ]
        },
        {
          name: 'Air tours',
          active: Math.floor(Math.random() * 2),
          key: 'air_tours',
          children: [
            {
              name: 'Sccenic flight tours',
              key: 'scenic_flight_tour',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Sky diving',
              key: 'sky_diving',
              active: Math.floor(Math.random() * 2)
            }
          ]
        },
        {
          name: 'Water-based activities',
          key: 'surface_tours',
          // tslint:disable-next-line:max-line-length
          active: Math.floor(Math.random() * 2),
          children: [
            {
              name: 'Sailing',
              key: 'sailing',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Cruise',
              key: 'cruise',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Boat tour',
              key: 'boat_tour',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Whale watching',
              key: 'whale_watching',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Jet tours',
              key: 'jet_tour',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Fishing charters',
              key: 'fishing_charter',
              active: Math.floor(Math.random() * 2)
            },
          ]
        },
        {
          name: 'Underwater tours',
          key: 'undersea_tours',
          active: Math.floor(Math.random() * 2),
          children: [
            {
              name: 'Snorkelling tour',
              key: 'snorkeling_tour',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Diving',
              key: 'scuba_diving',
              active: Math.floor(Math.random() * 2)
            }
          ]
        },
        {
          name: 'Activities',
          key: 'activities',
          active: Math.floor(Math.random() * 2),
          children: [
            {
              name: 'Hiking',
              key: 'hiking',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Swimming',
              key: 'swimming',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Horse riding',
              key: 'horse_riding',
              active: Math.floor(Math.random() * 2)
            },
            {
              name: 'Surfing',
              key: 'surfing',
              active: Math.floor(Math.random() * 2)
            }
          ]
        },
        {
          name: 'General',
          key: 'general',
          active: Math.floor(Math.random() * 2)
        }
      ]
      }
    };
    // console.log('sl');
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

  runrun () {
    // console.log('run');
    this.ok = true;
    this.run = setInterval(() => {
      this.info.temp ++;
      if (this.info.temp >= 1000) {
        this.info.err = true;
        this._snaclBar.open('Some thing went wrong please try again!','',{
          duration: 1000
        });
        clearInterval(this.run);
      }
      this.sl();
    }, 50);
  }

  stopstop() {
    console.log('stop');
    clearInterval(this.run);
    // callback();
  }

}

