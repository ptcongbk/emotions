import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

// import * as Collections from 'typescript-collections';
import { List } from 'linqts';

@Component({
  selector: 'app-filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent implements OnInit {

  info = {
    hateClassifier: [{
      text: 'Oyoty Hate',
      value: 'oyotyHate'
      },
      {
        text: 'Keyword',
        value: 'keyword'
      },
      {
        text: 'Oyoty Toxicity',
        value: 'oyotyHoxicity'
      }],
    status: '0',
    listTweet: undefined,
    state: {
      sliderValue: 0,
      condition: {
        sortBy: 'oyotyHate',
        minValue: 0
      },
      listToShow: undefined
    },
  };

  constructor(
    public http: HttpClient
  ) {
    this.info.listTweet = this.fillData();
    // this.info.listTweet;
    // console.log(this.info.listTweet.getValue());
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
    new List<any>(this.info.listTweet)
      .OrderBy(sorter => sorter[this.info.state.condition.sortBy])
      .Where(r => r[this.info.state.condition.sortBy] >= this.info.state.condition.minValue)
      .ForEach(r => {
          this.info.state.listToShow.push(r);
      });
    // console.log(this.info.state.listToShow);
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
    const data = [
      {
        text: "#VoteBlue2014 Yeah. CUZ 8 million people in faggot ass #newyork are #chickenshit JEWS> FUCK THEM right? Fuck Bibi Netanyahu. RIGHT?",
        keyword: 1,
        oyotyHoxicity: 2,
        oyotyHate: 3
      },
      {
        text: "I'm arrogant and my bitch conceited 😈😎",
        keyword: 2,
        oyotyHoxicity: 3,
        oyotyHate: 4
      },
      {
        text: "Sitting alone watching White Chicks, no pants, fuzzy blankets, tea || turn up",
        keyword: 6,
        oyotyHoxicity: 5,
        oyotyHate: 4
      },
      {
        text: "Emma Watson slays every single Harry Potter movie. Each film becomes her bitch.",
        keyword:12,
        oyotyHoxicity: 13,
        oyotyHate: 12
      },
      {
        text: "'@jayswaggkillah: '@JacklynAnnn: @jayswaggkillah Is a fag' jackie jealous' Neeeee",
        keyword: 22,
        oyotyHoxicity: 12,
        oyotyHate: 12
      },
      {
        text: "Just smashing a akbar with @TyroneLarkham @LarkhamWilliam @1jamesmitchell @philmaguire3",
        keyword: 14,
        oyotyHoxicity: 24,
        oyotyHate: 12
      },{
        text: "RT @skythedon: Huge ass, small waist & okay face & bitches really think they famous",
        keyword: 33,
        oyotyHoxicity: 42,
        oyotyHate: 32
      },
      {
        text: "“@fhairhead: Only in Vermont is it big news that our govern got a buck #vermontproblems”",
        keyword: 75,
        oyotyHoxicity: 11,
        oyotyHate: 22
      },
      {
        text: "@Zhugstubble You heard me bitch but any way I'm back th texas so wtf u talking about bitch ass nigga",
        keyword: 99,
        oyotyHoxicity: 11,
        oyotyHate: 35
      },
      {
        text: "@MoriTaheripour shut up nigger whore! Hope u get raped by one of those animals. Might change your tune.",
        keyword: 55,
        oyotyHoxicity: 43,
        oyotyHate: 52
      },
      {
        text: "@Oprah @3LWTV Fuck you nigger sheboon. Hope you r strung up like all niggers should be. WHITEPOWER. #1488",
        keyword: 88,
        oyotyHoxicity: 67,
        oyotyHate: 77
      },
      {
        text: "I want to go to a haunted house maybe get possesed y'know just to see if ghosts are real 😱💀",
        keyword: 11,
        oyotyHoxicity: 23,
        oyotyHate: 13
      },
      {
        text: "just dont give a fuck",
        keyword: 41,
        oyotyHoxicity: 31,
        oyotyHate: 51
      },
      {
        text:  "RT @HoodBibIe: Niggas with face tats are the same ones that stole your animal crackers in elementary smh they ",
        keyword: 77,
        oyotyHoxicity: 67,
        oyotyHate: 69
      },
      {
        text: "I'm never gonna be ok with my nigga around alot of bitches while with his boys. Cause I was once that female your boys put you on !!",
        keyword: 96,
        oyotyHoxicity: 42,
        oyotyHate: 56
      },
      {
        text: "Damn Eli. That's just ruff. I'm not even gonna trash talk that one. Get your game together Eli. You're a good QB. Stop with the TO's",
        keyword: 13,
        oyotyHoxicity: 67,
        oyotyHate: 43
      }
    ];
    return data;
  }

}
