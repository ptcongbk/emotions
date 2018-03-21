import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnotationService {

  // private _url: string = 'http://bigdata.ict.griffith.edu.au/gbr_tools/labels';
  private _url = 'https://shrouded-dawn-52676.herokuapp.com/labels';
  //private _url = 'http://127.0.0.1:5000//labels';
  constructor(private _http: Http) { }

  getCategories(data?: any) {
    const headers = new Headers({

      // 'Content-type': 'application/json'
    });
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('X-Requested-With', 'XMLHttpRequest');

    const option = new RequestOptions({
      headers: headers
    });
    let url = '';
    url = this._url + '?sentence=' + <string>data;
    return this._http.get(url, option)
      .map((response: Response) => response.json());
  }

  getTweets(index: number, length?: 50) {
    if (index < 0 || index > this.tws.length) {
      index = 0;
    }
    if (length > this.tws.length || length <= 0) {
      length = 50;
    }
    return this.tws.slice(index, <number>(index + length));
  }

  getTotal() {
    return <number>this.tws.length;
  }

  tws = [
    {
      "Timezone": "None",
      "Tweet": "I think I might lose my mind I m so excited snorkel greatbarrierreef geeked The Great",
      "Sentiment_score": 0.6722,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "this video has been long overdue our little trip to the great barrier reef and the perfect",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "New Caledonia",
      "Tweet": "Making friend out on the greatbarrierreef crazy fact All clown fish are born male and the",
      "Sentiment_score": 0.2023,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Spent the last two days sailing around the Whitsunday s snorkeling and diving the great barrier reef The most unreal experience",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "sailing"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "hike hiking summit capricorncoast thisisqueensland greatbarrierreef yeppoon australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "hiking"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "hike hiking summit capricorncoast thisisqueensland greatbarrierreef yeppoon australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "hiking"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "TBT Great Barrier Reef adventures My favourite day cairns greatbarrierreef visitqueensland",
      "Sentiment_score": 0.34,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Scuba dived with sharks at the great barrier reef Checking this off the bucket list",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Perth",
      "Tweet": "TBT to the bottom of the ocean at the great berrier reef scoobadiving greatbarrierreef nemo",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "portdouglas greatbarrierreef queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "australia queensland greatbarrierreef whitsundays",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef downunder goodtimes fish beautiful australia The Great Barrier Reef",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "snorkeling in the greatbarrierreef amazing blue water fish discoverqueensland",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "How beautiful beach",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "australia cairns michaelmascay greatbarrierreef beautiful beach",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Brasilia",
      "Tweet": "Fitzory Island Cairns Australia paradise cairns fnq greatbarrierreef naturegram",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Brasilia",
      "Tweet": "fish greatbarrierreef aussielife underwater selfie cruisewhitsundays amazing day",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Cannot wait for scuba diving tomorrow greatbarrierreef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "australia cairns summer greatbarrierreef beautiful beach sea blue",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "The rain has set in for Day 1 of our Fitzroy Holiday naptime fitzroyisland greatbarrierreef",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Star fish scuba greatbarrierreef australia Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "A dive trip is never complete without an underwater selfie australia scuba greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "Finding Nemo Short clip courtesy of keithnair scuba greatbarrierreef australia Great",
      "Sentiment_score": 0.765,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Filling in a rainy morning yesterday on fitzroyisland greatbarrierreef headspace Fitzroy",
      "Sentiment_score": -0.0772,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Clownfish on the greatbarrierreef taken with a Canon G15 in a FantaseaLine housing CanonAustralia Queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Sunset at fitzroyisland greatbarrierreef holidays Fitzroy Island Great Barrier Reef",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Before amp After my Scuba Dive at the Great Barrier Reef scuba greatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Blue spotted stingray at fitzroyisland greatbarrierreef holidays",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "snorkeling at fitzroyisland greatbarrierreef holidays",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "snorkeling at fitzroyisland greatbarrierreef holidays",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Relaxing at fitzroyisland greatbarrierreef holidays",
      "Sentiment_score": 0.7003,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Evidence of coralbleaching on the coralreef at fitzroyisland greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Hungry Turtle nom nom nom neature turtle greatbarrierreef australia scuba divetrip",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "New Delhi",
      "Tweet": "greatbarrierreef heartreef whitsundays seaplane jugalagerholiday",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "scuba diving in the great barrier reef today lol",
      "Sentiment_score": 0.4767,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Photo by Harry Otoi this weekend dive queensland CairnsGBR seeaustralia greatbarrierreef coralbleaching",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Tweeting me He says greenturtle coming in for a closer look greatbarrierreef GreenIsland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Checking out the Great Barrier Reef on our day off suitup GermeinSisters greatbarrierreef portdouglas snorkeling flippers",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "ambition achieved I went snorkling on the greatbarrierreef It was an amazing experience",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "turtle greatbarrierreef snorkeling underwater unforgettable GoPro australia Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "A giant turtle pops out of the water to say hi amazing wildlife gbr greatbarrierreef",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Take me back to the Great Barrier Reef traveller iwishiwasamermaid greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Throw back to that one time I was searching for Nemo throwbackthursday gopro greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Busy atwork exploring the superb coral reefs making Australia s greatbarrierreef one of ",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Perth",
      "Tweet": "Waking up this cute little guy while scuba diving atnight at the greatbarrierreef in",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Bangkok",
      "Tweet": "Post scuba selfie from my vacation greatbarrierreef australia travel vacation selfie",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "I believe I can fly heliride greatbarrierreef Moore Reef Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Adelaide",
      "Tweet": "Another day in paradise boats greatbarrierreef ocean pacificocean bluesky yorkeysknob",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "sunset over cairns queensland australia The greatbarrierreef is the main draw for Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "australia queensland airliebeach whitsundays greatbarrierreef coral picoftheday flight",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "australia queensland airliebeach whitsundays greatbarrierreef coral picoftheday flight",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "australia queensland airliebeach whitsundays greatbarrierreef coral picoftheday flight",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Great Barrier Reef greatbarrierreef Queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Crossing the greatbarrierreef snorkling and scuba bucketlist travel downunder Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Singapore",
      "Tweet": "Thumbs up for a weekend snorkeling the greatbarrierreef with oceansafarict in",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "sleepingatthepontoon sleepingatgreatbarrierreef greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "sleepingonpontoon sleepingatgreatbarrierreef greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "T B T Day dreamin of days like dees greatbarrierreef imonaboat australia tbt The",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "sleepingonpontoon sleepingatgreatbarrierreef greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "greatbarrierreef seeaustralia tourismwhitsunday whitsundays modaacolazione traveldiary",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "I can feel your name White Heaven Beach",
      "Sentiment_score": 0.5106,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "New Delhi",
      "Tweet": "australia qld greatbarrierreef heartreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "I can feel your name White Heaven Beach",
      "Sentiment_score": 0.5106,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "australia qld greatbarrierreef heartreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Anemonefish on the greatbarrierreef taken with a Canon G15 in a FantaseaLine housing CanonAustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Swam in the great barrier reef today One of the seven natural wonders of the world done",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Great Barrier Reef time greatbarrierreef Queensland reef snorkeling diving australia oz",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Rome",
      "Tweet": "Beautiful day for snorkeling the great barrier reef yesterday",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "FISHY greatbarrierreef Australia Cairns Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Low tide on thegreatbarrierreef So much colour and life you really get lost in the moment visitFNQ turtle",
      "Sentiment_score": -0.5688,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef scuba qantas Great Barrier Reef Whitsundays",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Buenos Aires",
      "Tweet": "Great day day diving the greatbarrierreef with posiden diving shark GoPro nofilter Port",
      "Sentiment_score": 0.6908,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "Great Barrier Reef selfie greatbarrierreef greenisland Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "giant chess airliebeach whitsundays greatbarrierreef qld tropics incredibleaustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Don t worry everyone I found Nemo",
      "Sentiment_score": -0.4404,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef greatbarrierreefqld cairns qld",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "2nd helicopter ride of the trip this time over the Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "timelapse whitsundays sunset greatbarrierreef sun queensland changeyourlife Stonehaven",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "It s pretty sweet up here roadtrip fnq greatbarrierreef tropics Rex Lookout",
      "Sentiment_score": 0.7351,
      "Sub_categories": [
        "forest"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Daydream Island daydreamisland like4like whitsundays greatbarrierreef Daydream Island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Yakutsk",
      "Tweet": "Nothing like a beautiful day on thegreatbarrierreef travellingcouple",
      "Sentiment_score": 0.7506,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "I ve showered with worse views greatbarrierreef exploretnq roadtrip scubadivergirls Great",
      "Sentiment_score": 0.25,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Sunsets one amp only haymanisland greatbarrierreef australia tripadvisor queenofk One amp Only",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "More snorkeling on beautiful Green Island in the Great Barrier Reef greatbarrierreef",
      "Sentiment_score": 0.6326,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Salt water therapy queenslandweekender gobareboating whitsundays greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Karachi",
      "Tweet": "It s so clear and blue I can see right through you",
      "Sentiment_score": 0.4391,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "throwback greatbarrierreef Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "yachtlife fidelio queensland whitsundays ltd greatbarrierreef catamaran bareboat",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Scuba diving in Mackerel bay australia tripadvisor greatbarrierreef whatstheretobeafraidof",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Mountain Time (US & Canada)",
      "Tweet": "On the lookout on the greatbarrierreef with ttransmissions portdouglasdaintree Agincourt",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "My 2 open water divers haymanisland queensland australia padi greatbarrierreef myworld",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "snorkeling Freezing snorkeling greatbarrierreef hamilton",
      "Sentiment_score": -0.1027,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Karachi",
      "Tweet": "Helicopter Flying heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Helicopter Flying heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Helicopter Flying heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Helicopter Flying heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Karachi",
      "Tweet": "Helicopter Flying heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Helicopter Flying heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Hamilton Island heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Hamilton Island heartreef snorkeling greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "This is living australia whitsundayisland greatbarrierreef Hayman Island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Sunset at Hamilton Island heartreef snorkeling greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour",
        "island"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "So it was in fact pretty great greatbarrierreef",
      "Sentiment_score": 0.8074,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Beautiful clear water lone swimmer bluepearl bay greatbarrierreef australia queenofk",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "6 km hike to bluepearlbay greatbarrierreef australia tripadvisor lonelyplanet queenofk",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "hiking"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Chillllllll at Hamilton Island windy130 greatbarrierreef hamilton",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Look Up The Stars Look Up They Shine For You greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "Time To Say Goodbye Hamilton Island Whitehaven greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "We went snorkeling in the most beautiful location for our 14 month anniversary greatbarrierreef",
      "Sentiment_score": 0.6361,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Early and crisp morning such a delight",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Getting ready for some snorkeling at greatbarrierreef family fun longhornpride cairns",
      "Sentiment_score": 0.7003,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "greatbarrierreef adventure love family fun cairns australia Agincourt Reef Great",
      "Sentiment_score": 0.9313,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Inside the Stunning Nature we must protect",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "greatbarrierreef whiteheavenbeach heartreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "feelslikesummer winter swimming snorkeling greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "swimming",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "We found Nemo",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Karachi",
      "Tweet": "firstdive gbr greatbarrierreef daryldownunder",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Karachi",
      "Tweet": "Dawn diving on the greatbarrierreef Does it get any better portdouglasdaintree with",
      "Sentiment_score": 0.4939,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Bootleg Stuff im on holiday at the great barrier reef rn and the amount of bootleg nemo stuff is incredible",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Truly beautiful greatbarrierreef australia govisit lonelyplanet tripadvisor queenofk",
      "Sentiment_score": 0.7783,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Karachi",
      "Tweet": "Swimming with the fishes greatbarrierreef cairns Queensland Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "The great barrier reef is just something everyone needs to see at some point in their lives",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "i get to snorkel in the great barrier reef today",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "tbt Great Barrier Reef Cairns Australia cairns greatbarrierreefqld greatbarrierreefaus",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Fish returned to water",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "lust4life Scube greatbarrierreef cairns hashtag love",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Hey girls I m on an island in the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "I LOVE the sea",
      "Sentiment_score": 0.7125,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "At great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The things you see down there greatbarrierreef sundays The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Alisha amp Isabella aboard Aquarius greatbarrierreef portdouglas greatday GiaanRooney AliHare4 AgentAdam",
      "Sentiment_score": 0.0258,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Where are you Dori greatbarrierreef downunder The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Spent the afternoon aboard Aquarius portdouglas greatbarrierreef awesome AgentAdam GiaanRooney AliHare4",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "3justincredible Have you ever did scuba diving at the great barrier reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "What makes the perfect home port",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "perfecthomeport superyachtgroupgreatbarrierreef cairnsmarlinmarina reefmarina",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Scuba diving with the birthday girl thegreatbarrierreef checkedoffthebucketlist epicvacay",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "What Gibbo said brissyraces cairnsamateurs racingonthegreatbarrierreef GreatBarrierReef horseracing",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "horse_riding"
      ]
    },
    {
      "Timezone": "Mumbai",
      "Tweet": "Done the second snorkeling day Pics to come australiatrip bfftrip thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Barry the Barracuda Hastings Reef Cairns greatbarrierreef hastingsreef Hastings Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "paradise greatbarrierreef Australia sandbar cay island Great",
      "Sentiment_score": 0.8519,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "break greatbarrierreef 3 Lady Elliot Island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "G day mate travelforteens lululip greatbarrierreef goTFT passionsofparadise Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Snorkling around",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "The great barrier reef The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Found Nemo clownfish spoilsportlive greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Floating greatbarrierreef thrillofalifetime Great Barrier Reef Cairns QLD",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "snorkeling on the Great Barrier Reef greatbarrierreef australia snorkeling summer",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "A bloody perfect day on the GBR",
      "Sentiment_score": 0.2023,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Stockholm",
      "Tweet": "happy greatbarrierreef gbr sunshine FNQ upolu Upolu Cay",
      "Sentiment_score": 0.7845,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Just flew over this HeartReef greatbarrierreef Heart Reef Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Dublin",
      "Tweet": "greatbarrierreef continentalshelf Great Barrier Reef Whitsundays",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Seoul",
      "Tweet": "greatbarrierreef Great Barrier Reef Whitsundays",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Australian winter greatbarrierreef snorkeling greenisland australia feelingmyself",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Day on the reef with my love greatbarrierreef whitsundays snorkel travel explore",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Today was fun snorkel greatbarrierreef travel backpacker Oz SeeAustralia Cairns",
      "Sentiment_score": 0.5106,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Fitzroy Island Just like an aquarium fitzroyisland greatbarrierreef aquarium",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Duggie being a fish greatbarrierreef outerreef baitreef snorkel dive stunning ocean",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Life Profit thegreatbarrierreef sidnaidu thejourney Great Barrier Reef Australia",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Irkutsk",
      "Tweet": "Phone call with the Captain today out on the boat tomorrow greatbarrierreef thefalla hostie wishmeluck",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Great Barrier Reef baby greatbarrierreef amazing whitsundays beautiful snorkel dive",
      "Sentiment_score": 0.8271,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Looking forward to tomorrow boating whitsundays greatbarrierreef awesome Hamilton Island",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Scuba diving is another world I just love it scuba padi scubadiving greatbarrierreef The",
      "Sentiment_score": 0.6705,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Off to great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Lookin special on a day trip out thegreatbarrierreef with the",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Singapore",
      "Tweet": "Day 179 Long day on the reef greatbarrierreef australia baconlove2016 summerholiday",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "australia greatbarrierreef lizardisland oggi abbiamo nuotato",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "Swimming with the Fishies pastyincairns greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "today i saw 5 humpback whales and a leopard shark going to in the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "whale_watching"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Loved every second of our first certified scuba diving on the greatbarrierreef despite the",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Paradise australia queensland cairns greatbarrierreef island Great Barrier Reef",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "I have snorkel the great barrier reef And soon I will be scuba diving it Omg I can t wait",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "A natural wonder far beyond imagination greatbarrierreef heartisland heliview",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Me and johndenver after a scuba dive on the greatbarrierreef circa 1986 farout mycrazyheart",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Couldn t have asked for a better day Got to dive the greatbarrierreef with 20m visibility",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "The Great Barrier Reef Australia Cairns diving greatbarrierreef yacht blue Cairns",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "c ad v ng buriedintothegreatbarrierreef Flynn Reef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Taking off in our helicopter for our trip to greatbarrierreef Fly there and boat back with",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "snorkeling at the Great Barrier Reef was A MAZ ING austrilia greatbarrierreef hardyreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "biblejoe biblejoeselfie qld cairns greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Madrid",
      "Tweet": "A day to celebrate life swimming",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "biblejoe qld cairns greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "A glorious day on the water The Great Barrier Reef",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "It s important to have the right gear when scuba diving scubadiving australia travel greatbarrierreef ekandoit",
      "Sentiment_score": 0.2732,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Diving on the Great Barrier Reef so good I did it twice",
      "Sentiment_score": 0.6176,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "underwaterselfie greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "diving",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef GBR diving divingshop prodive gopro cairns australia Great",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "snorkeling greatbarrierreef phoneoverboard ragingthunder Nudey",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Diving the great barrier reef was definetly one of the coolest things ive ever done",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Crossed of the checklist done What an amazing sight to behold greatbarrierreef",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Green island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Arizona",
      "Tweet": "australia cairns greatbarrierreef nofilter",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "Hello Wally scubadiving greatbarrierreef northqueensland Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "It s even more beautiful under water scubadiving greatbarrierreef northqueensland australia",
      "Sentiment_score": 0.6361,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Your typical Australian dive master scubadiving greatbarrierreef northqueensland australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Mother and son sharing a first snorkeling greatbarrierreef northqueensland australia",
      "Sentiment_score": 0.4215,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "My girl snorkeling greatbarrierreef northqueensland australia diving elattitude Great",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The Great Barrier Reef snorkeling snorkeling thegreatbarrierreef wonderfulday greenisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Blue pearl bay eastcoast greatbarrierreef travelgram travel backpacker wanderlust",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "Seagull seagull seaworld amazingview 2016 cairns greatbarrierreef llovetravel boattrip",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "Under the sea snorkel seeAustralia sea oz australia thumbsup greatbarrierreef snorkeling",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "Cairns is such a blessed place with tropical weather and the greatbarrierreef So much to",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "The Great Barrier Reef instadaily instatraveling instagram greenisland thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "Best day greatbarrierreef snorkeling cairns justkeepswimming Great Barrier Reef",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "swimming",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "No filter needed greatbarrierreef cairns Great Barrier Reef",
      "Sentiment_score": -0.296,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef hair dilligaf fresh Airlie Beach Whitsundays",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "I the ocean aussieaussieaussie ocean greatbarrierreef carinstagram australia beautiful",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "No need to say anything amazinggreatbarrierreef 7naturewondersoftheworld 18mlnyearsold",
      "Sentiment_score": -0.296,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Underwater of cairns underwater cairns thegreatbarrierreef ocean wonderfulview",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Whale spotting OffDay pacificocean magneticisland townsville greatbarrierreef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "whale_watching"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "mojitomadness salthousecairns sunday sundayfunday greatbarrierreef austrailia travel",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pretoria",
      "Tweet": "Dropping into cairns Australia greatbarrierreef southernsea vacation travel skeltonics",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "unforgettable aniceday instamovies goodjob snorkeling greenisland thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Snorkeling at the Great Barrier Reef cystralclearwater greatbarrierreef reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Mountain Time (US & Canada)",
      "Tweet": "shamsi90 enjoying natures beauty Deep sea snorkeling at the greatbarrierreefqld",
      "Sentiment_score": 0.802,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Mountain Time (US & Canada)",
      "Tweet": "New field site greatbarrierreef Australia researchlife",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pretoria",
      "Tweet": "Countless shades of blue greatbarrierreef australia the water is visual poetry to my soul",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pretoria",
      "Tweet": "I can work with this greatbarrierreef hamiltonisland australia travel movealongclouds",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "destination cairnsaustralia paradise greatbarrierreef",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Rainboooow australie queensland rainbow boat greatbarrierreef Green Island Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Diving in the Great Barrier Reef australia boat diving greatbarrierreef roadtrip",
      "Sentiment_score": 0.1531,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "All that s missing is Enya snorkeling greatbarrierreef lowisles portdouglas sailaway",
      "Sentiment_score": -0.296,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "cairns is your perfecthomeport in the asiapacific region superyachtgroupgreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Spent the day in paradise greatbarrierreef greenisland queensland australia",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "Aujourd hui j ai saut en parachute au dessus de la barri re de corail sky diving greatbarrierreef missionbeach australia",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "sky_diving"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "And to finish this trip on a high note sky diving above the great barrier reef sky diving",
      "Sentiment_score": 0.1531,
      "Sub_categories": [
        "sky_diving"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Snorkeling on the great barrier reef tomorrow buzzing",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "air whitsunday greatbarrierreef airwhitsunday whitsunday",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef cairns australia Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Snorkeling in best destination followed by sea food at the greatbarrierreef australia One",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "Bon voyage We are on our way to see the great barrier reef GoBruins BruinsDownUnder",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Like finding nemo jakeinaustralia greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The protected sea birds and private beach jakeinaustralia greatbarrierreef Great Barrier",
      "Sentiment_score": 0.7579,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "Look at this guy Big Wrasse jakeinaustralia greatbarrierreef Outer Reef The Great Barrier",
      "Sentiment_score": 0.5574,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "greatbarrierreef greenisland helicopter blue beautiful ocean beach cairns birthdaytrip",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "I found nemo greatbarrierreef jakeinaustralia Outer Reef The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef Would you go there tag a friend you swim here with Great Barrier Reef",
      "Sentiment_score": 0.4939,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics tropicalnorthqueensland reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "australia greatbarrierreef diving surfing cairns travel Green Island",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving",
        "surfing"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Just straight up beautiful greatbarrierreef queensland scuba findingnemo underthesea",
      "Sentiment_score": 0.7003,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Trip to the greatbarrierreef cairns queensland Cairns Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Such an amazing day of diving with mrcrampy somanypicturestocome greatbarrierreef",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Green island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "surfing australiaday travel cairns australia greatbarrierreef diving",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "surfing",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "How good s Cairns FNQ thisisqueensland greatbarrierreef cairns work 9news",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef turtles nemo snorkel booby snorkeling dive diving tropics tropicalnorthqueensland",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "cairns greenisland greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "australia cairns greatbarrierreef skuba",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "This is what I really want in my life",
      "Sentiment_score": 0.1513,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Diving snorkeling thegreatbarrierreef Carins rurutrip",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "diving thegreatbarrierreef Carins lovemylife rurutrip The Great",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics tropicalnorthqueensland reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Niceday thegreatbarrierreef havefun loveit Carins rurutrip Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Getting ready to snorkel the greatbarrierreef With my bestie hamiltonisland Explore",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Some mondaymotivation from beautiful Agnes Water gateway to the greatbarrierreef holiday bliss visitagnes1770",
      "Sentiment_score": 0.8834,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "From Australia with australia australia shotz heartreef greatbarrierreef Airlie",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brasilia",
      "Tweet": "My swimming buddy greatbarrierreef explorer baitreef hamiltonisland customizeyourlife",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Such wonderful variety of colors and texture on the greatbarrierreef portdouglas queensland",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Lady Elliot Island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "aov greatbarrierreef explore ladyelliotisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics tropicalnorthqueensland reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Buscando a Nemo greatbarrierreef australia Moore Reef the",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "TBT when I got to experience the largest living thing on earth",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "australia greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "America/New_York",
      "Tweet": "tbt to diving the greatbarrierreef last year with chrisknj swimming with turtles chasing",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "swimming",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "snorkeling on the Great Barrier Reef greatbarrierreef whitsundays airliebeach Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Co pilot for the day Thank you gsl aviation scenicflight greatbarrierreef",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Santiago",
      "Tweet": "Top spot in the morning greatbarrierreef Trinity Beach Cairns QLD paradise",
      "Sentiment_score": 0.7184,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Kitesurfing the great barrier reef with thousands of fish and hundreds of species of coral just",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "surfing"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "could be sad about a lot of things right now but i just went sky diving over the great barrier reef not much could top that",
      "Sentiment_score": -0.3586,
      "Sub_categories": [
        "sky_diving"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "great barrier reef scenic flight",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "coral heartreef greatbarrierreef bigjetplane",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "So the Barrier Reef is Great greatbarrierreef Australia quicksilver cruise reef fish",
      "Sentiment_score": 0.5141,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Was able to take a private jet tour over the Great Barrier Reef greatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "jet_tour"
      ]
    },
    {
      "Timezone": "Harare",
      "Tweet": "Holy wow The greatbarrierreef is incredible The Great Barrier Reef",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Beautiful day on the greatbarrierreef sunshine Sudbury Reef",
      "Sentiment_score": 0.7964,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Snorkeling here was awesome snorkeling greatbarrierreef reef Sudbury Cay",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "the great barrier reef is actually beautiful",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "One of the best days of the trip was exploring the reef",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "New Caledonia",
      "Tweet": "Perfect day for a snorkel on the greatbarrierreef in portdouglasdaintree with",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles commonnoddy snorkel snorkeling dive diving tropics tropicalnorthqueensland reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef so blue it didn t look real Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "F i n d i n g N e m o FoundNemo diving scuba greatbarrierreef australia clownfish",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Singapore",
      "Tweet": "H is for Heronisland In the southern greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Last free day Tomorrow we re out on the reef greatbarrierreef australia",
      "Sentiment_score": 0.5106,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Had a turtle ly amazing time at the Great Barrier Reef greatbarrierreef cairns springbreak",
      "Sentiment_score": 0.8126,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Had a turtle ly amazing time at the Great Barrier Reef greatbarrierreef cairns springbreak",
      "Sentiment_score": 0.8126,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Arizona",
      "Tweet": "Had a turtle ly amazing time at the Great Barrier Reef greatbarrierreef cairns springbreak",
      "Sentiment_score": 0.8126,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "i ve been on the move nonstop for the past week traveling australia today s mission snorkel the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Captain full speed ahead greatbarrierreef noicebergshere Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "P Sherman 42 Wallaby Way Sydney jk greatbarrierreef extremeadventures The Great Barrier Reef",
      "Sentiment_score": 0.2263,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics tropicalnorthqueensland reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Tea and speedboating Off on adventures australia travel greatbarrierreef whitsundays",
      "Sentiment_score": 0.34,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics tropicalnorthqueensland reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Rome",
      "Tweet": "Had a blast exploring the Great Barrier Reef greatbarrierreef travel",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "sky diving over the greatbarrierreef was amazing Laughing at my fun house mirror face",
      "Sentiment_score": 0.891,
      "Sub_categories": [
        "sky_diving"
      ]
    },
    {
      "Timezone": "Edinburgh",
      "Tweet": "Wishing I was back on the greatbarrierreef today For more pics from the reef check out my",
      "Sentiment_score": 0.2263,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "My best friend from the reef Everyone meet Sheldon turtle greatbarrierreef sophozadventure",
      "Sentiment_score": 0.8126,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Back in the air again This time by heli notaplane greatbarrierreef frequentflyer Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "About to leave the greatbarrierreef and whitsundays Such a great time Looking over my photos",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "turtle greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Whitsundays trip whitsundays Australia whitehavenbeach greatbarrierreef Whitsundays",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "greatbarrierreef australia heartreef whitsundays Isayitsaprettyawesomeday",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Anyway here s where I spent my Thursday greatbarrierreef snorkeling islandlife",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Bucket List Dive the greatbarrierreef What an amazing place Cairns Australia travel",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Checked out the Great Barrier Reef today best experience yet greatbarrierreef australia",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Perth",
      "Tweet": "snorkeling in the greatbarrierreef whitsundays whitsundayisland queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Ticking off another item off the bucketlist greatbarrierreef with jotownsend holiday cairns",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "What an amazing day on the Great Barrier Reef with jotownsend greatbarrierreef cairns",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics tropicalnorthqueensland reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "australia queensland Cairns greatbarrierreef diving sea awesome nicewiew greatwether",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "australia queensland Cairns greatbarrierreef diving sea awesome nicewiew greatwether",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Living it up at the Great Barrier Reef greatbarrierreef australia travel travels",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Loving these kind of bubbles Scuba diving in the Great Barrier Reef greatbarrierreef",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Australian Mission Complete GBR greatbarrierreef scubadiving scubadiver cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "rope water ocean greatbarrierreef oceanspirit cairns qld wood honeymoon nickhartsmaddy",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Perth",
      "Tweet": "Boat ride back from snorkeling the greatbarrierreef australia The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Great barrier reefing it today Life long dream to see the great barrier reef First time scuba",
      "Sentiment_score": 0.25,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "snorkel snorkeling greatbarrierreef australia ocean coralreef coral Port Douglas the",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Flight over the whitsundays with gsl aviation greatbarrierreef whitsundays australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Queensland greatbarrierreef thisisqueensland Cairns australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Greenland",
      "Tweet": "Heaven on earth seeaustralia exploreTNQ thisisqueensland cairns greatbarrierreef Great",
      "Sentiment_score": 0.8126,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Perth",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "deepseadiving thegreatbarrierreef adventure travel makingmemories cairns The Great",
      "Sentiment_score": 0.7506,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Kuala Lumpur",
      "Tweet": "When the weekend seems a life time ago greatbarrierreef sailing camillawithlove",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "sailing"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "thegreatbarrierreef snorkeling",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Rangoon",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Had a little swim in the Great Barrier Reef today greatbarrierreef cairns australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "American Universities must be amazing for an exchange mbalife FindingDory greatbarrierreef",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "greatbarrierreef Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "greatbarrierreef boatlife cairns Australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef Life on the Liveaboard greatbarrierreef australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The Great Barrier Reef Life on the Liveaboard greatbarrierreef australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Madrid",
      "Tweet": "The Great Barrier Reef Life on the Liveaboard greatbarrierreef australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Great Barrier Reef Selfie greatbarrierreef familyselfie bangingdayout Thetford Reef Blue",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The Great Barrier Reef Life on the Liveaboard greatbarrierreef australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Proper buzzed off today greatbarrierreef Thetford Reef Blue Lagoon",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Not much in wouldn t give to be in australia on the greatbarrierreef scuba dving tbt",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The Great Barrier Reef Life on the Liveaboard greatbarrierreef australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The Great Barrier Reef Life on the Liveaboard greatbarrierreef australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "dugongman JoshFrydenberg no safe zone for endangered sea green turtles on the great barrier reef im so ashamed by this",
      "Sentiment_score": -0.5092,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "The Great Barrier Reef Life on the Liveaboard greatbarrierreef australia Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Great Barrier Reef Queensland Australia greatbarrierreef greatbarrier queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "greatbarrierreef cairns australia travel traveling TagsForLikes",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Free diving in the Great Barrier Reef was just insane greatbarrierreef hamiltonisland diving",
      "Sentiment_score": 0.296,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Adventure time greatbarrierreef hamiltonisland australia diving freediving snorkeling",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Dublin",
      "Tweet": "greatbarrierreef hamiltonisland whitsundays diving freediving snorkeling ocean sun",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Snorkeling in the Great Barrier Reef today Found Nemo and all his friends too greatbarrierreef",
      "Sentiment_score": 0.4767,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Turtle time whitsundays australia gadventures travel yolo greatbarrierreef turtle",
      "Sentiment_score": 0.2732,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Well hello there little shark greatbarrierreef shark snorkeling gopro australia cairns",
      "Sentiment_score": 0.2732,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Under the sea greatbarrierreef snorkeling seaturtle turtle shark stingray gopro",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "And we re here australianlife cairns australia greatbarrierreef cruise vacation",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Amazing day Snorkled in the Great Barrier Reef greatbarrierreef snorkeling turtle",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Favorite Color greatbarrierreef turquoise sea ocean australia reef coralreef",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Let s snorkle greatbarrierreef snorkeling cairns australia greenisland ocean",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Swimming away for new adventures with my little friend greatbarrierreef snorkeling",
      "Sentiment_score": 0.6494,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Flew over the greatbarrierreef and whitsundayisland this morning",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Just some to make your day sailing dolphins australia barrierreef greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "sailing"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Love Australia greatbarrierreef greenisland australia cairns beach ocean sea",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Wish I was a mermaid greatbarrierreef mermaid snorkeling reef ocean cairns australia",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Caught up with travlinchippy busytimes fishing greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "fishing_charter"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Sunset over the Great Barrier Reef cruisewhitsundays greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "david siegal made a friend giganticfish greatbarrierreef Great Barrier Reef Whitsunday",
      "Sentiment_score": 0.4939,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef Great Barrier Reef Whitsunday island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Sunset on the greatbarrierreef The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "More from Thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Just chillin greatbarrierreef hamiltonisland diving freediving snorkeling summer ocean",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Meeting you was turtley worth it Thegreatbarrierreef",
      "Sentiment_score": 0.2263,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "travel wanderlust australia greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "Some stunning coral formations at Bait Reef diving livetoscuba greatbarrierreef Whitsunday",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "Sea life spotting ispy whatisee greatbarrierreef seaturtlegalore lifedownunder Green",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Coral cay vanemmerik outerreef greatbarrierreef fnq queensland ocean latergram",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef cairns thegreatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "bestfriend travelbuddy snorkeling greatbarrierreef Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Canberra",
      "Tweet": "Another stunning day of diving and snorkeling greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "White tip reef shark greatbarrierreef australia diving scubadiving padi reefshark The",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "White tip reef shark greatbarrierreef cairns australia diving scubadiving padi",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "What an incredible experience diving in the Great Barrier Reef is oceanfreedom greatbarrierreef travel",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "had an amazing day snorkeling at the great barrier reef but being a very smart person I forgot",
      "Sentiment_score": 0.7498,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "snorkelingthegreatbarrierreef cairns greatadventurescruises moorereef coral GoPro heroblack5",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "snorkelingthegreatbarrierreef cairns greatadventurescruises moorereef livinginparadise GoPro heroblack5",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Can t contain my excitement at heading to LizardIsle a treasure in the greatbarrierreef travel diving",
      "Sentiment_score": 0.6908,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "1st trip to Oz has been unreal now onto Bali cairns greatbarrierreef diving",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "australia greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "heronisland greatbarrierreefqld southerngreatbarrierreef exploringaustralia heronisland australia paradise",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Just came back from a wonderful snorkel and diving trip at the great barrier reef So incredibly beautiful australia GreatBarrierReef",
      "Sentiment_score": 0.8581,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "australia cairns greatbarrierreef outerreef cruise",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "one amp onlyhaymanisland morningdance greatbarrierreef australia paradise One amp Only",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Heart Reef No filter required for this incredible place greatbarrierreef Great Barrier Reef",
      "Sentiment_score": -0.296,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Dublin",
      "Tweet": "Memories creeping back again flashback Australia greatbarrierreef explore memories",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "lowisles greatbarrierreef snorkeling adventure Low Isles",
      "Sentiment_score": 0.0516,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Amazing sunset pic nicolamarshall95",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "turtles greatbarrierreef australia Quicksilver Port Douglas the Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Swimming with turtles greatbarrierreef australia Port Douglas the Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "Harare",
      "Tweet": "Eshelby Reef Whitsundays",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "whitsundays island pacificdawn greatbarrierreef qld australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics reef island holiday bird",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "just keep swimming greatbarrierreef australia cairns snorkeling gopro The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "swimming",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "get to do the great barrier reef on sunday",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "world wanderlust greatbarrierreef australia createexplore cairns sunrise",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "The Great Barrier Reef heartreef heartreefgreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtle nemo coral snorkel snorkeling dive diving tropics australia reef island",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Putney beach at low tide The ultimate beach bum destination idreamofkeppel southerngreatbarrierreef",
      "Sentiment_score": -0.2732,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "flew over the great barrier reef today",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtle nemo coral snorkel snorkeling dive diving tropics australia reef island",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef turtle nemo coral snorkel snorkeling dive tern tropics australia reef island holiday",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "ok so 3 people have died on the great barrier reef in the last 3 days",
      "Sentiment_score": -0.3947,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "alyssa adventuring with the underwater wildlife in the greatbarrierreefqld AJetSettingLife travel",
      "Sentiment_score": 0.5106,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Australia is treating us well at the great barrier reef marine park Biggest national park",
      "Sentiment_score": 0.2732,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Going to the great barrier reef again Gotta find nemo today Reef Fleet Terminal in Cairns QLD",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "helicopter ride flying over the greatbarrierreef and then back to Port Douglas Not bad for",
      "Sentiment_score": -0.5423,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "Tuesday 22 November ocean beach blue cairns greenisland greatbarrierreef queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Sunset drinks from our verandah on the Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "thegreatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Adelaide",
      "Tweet": "Under the sea brantravels greatbarrierreef australia cairns naturalwonder ocean",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtle nemo coral snorkel snorkeling dive diving tropics australia reef island",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Diving the greatbarrierreef today was so good I got a bite thrown in from this little dude for",
      "Sentiment_score": 0.6176,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "The sunset twilight before dinner love that creamy water",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Another incredible unforgettable day",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef Hastings Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Into the storm brantravels greatbarrierreef australia cairns storm boat ocean clouds",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Cairns greatbarrierreef snorkeling nosharks seaturtle The",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef turtle nemo coral snorkel snorkeling dive diving tropics australia reef island",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "And of course I find nemo while scubadiving the greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Kind of hard to beat taking a selfie with a seaturtle while snorkeling the greatbarrierreef",
      "Sentiment_score": -0.1027,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "The surreal great barrier reef Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "savethegreatbarrierreef The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Mountain Time (US & Canada)",
      "Tweet": "Kind of hard to beat taking a selfie with a seaturtle while snorkeling the greatbarrierreef",
      "Sentiment_score": -0.1027,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Mountain Time (US & Canada)",
      "Tweet": "This one is getting framed and printed fitzroy greatbarrierreef beach coral nudeybeach",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Mountain Time (US & Canada)",
      "Tweet": "What a beautiful nature what a beautiful place greatbarrierreef thanks virginaustralia for",
      "Sentiment_score": 0.8934,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Paradise fitzroyisland nudeybeach greatbarrierreef queensland australia",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Snorkeling with the Family WOW greatbarrierreef familyholidayqueensland Great Barier Reef",
      "Sentiment_score": 0.8636,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Mid-Atlantic",
      "Tweet": "thegreatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Islamabad",
      "Tweet": "Snorkeling in the Great Barrier Reef greatbarrierreef australia honeymoon portdouglas",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef holiday tern giantclam fish",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "scenicflight helicopter island greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "How your Saturday was as good as mine whitsundays whitehaven airliebeach greatbarrierreef",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "instacouple fitzroyisland fitzroy greatbarrierreef instagram oz australia downunder",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "holiday island sea reef barrierreef greatbarrierreef hamiltonisland sun summer",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Scuba Steve eat your heart out greatbarrierreef reefsplitter straya Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "greatbarrierreef australia greenisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "In love with the Ocean",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef granbarreradecoral ocean increible amazing",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "hamiltonislandair greatbarrierreef thisisqueensland hamiltonisland queensland australia globetro",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Small seaplane for our great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Look at my beautiful Hair doesn t matter I did it I snorkeled at the greatbarrierreef",
      "Sentiment_score": 0.6124,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Ariel view of the heart reef the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "instagram coralreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Found Nemo Dory and some other fishys scubadiving australia greatbarrierreef travelling",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "greatbarrierreef poser poseralert oz greatbarrierreef coralreef oz",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greenisland greenislandcairns cairns cairnsofinstagram thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Finally got to dive at the great barrier reef love cute nice happy australia cairns",
      "Sentiment_score": 0.9287,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Went to find Nemo and found Crush instead thegreatbarrierreef greatbarrierreef Cairns",
      "Sentiment_score": -0.1531,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Copenhagen",
      "Tweet": "thegreatbarrierreef greatbarrierreef greatbarrierreefaustralia coralreef blue bluewater",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greenisland greenislandcairns cairns cairnsofinstagram thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "australia australiatrip cairns cairnstrip greatbarrierreef greatbarrierreefairplane",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "reefexperience reefencounter greatbarrierreef scubadiving snokeling sharkdiving",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "submarine through the greatbarrierreef with oceanspiritcruises amp adventurenorthaustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "cruise",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "australia australiatrip cairns cairnstrip greatbarrierreef greatbarrierreefairplane",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Irkutsk",
      "Tweet": "First ever Scuba Dive and met a cute Humphead Maori Wrass greatbarrierreef australia",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Irkutsk",
      "Tweet": "thegreatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Irkutsk",
      "Tweet": "Under the sea greatbarrierreef australia cairns ocean coral sea snorkeling diving",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "nobaddays greatbarrierreef liveaboard scubasteve Outer Reef The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "scubadiving greatbarrierreef sea",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "At the cairnsgreenisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "traveldairies cairns queensland thisisqueensland greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Mumbai",
      "Tweet": "Black out of the blue greatbarrierreef cairns ribbonreefs duyfken captpbw tagandrelease",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Seoul",
      "Tweet": "birdlife birdland island cairns greatbarrierreef queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Had the best day ever greatbarrierreef scubadiving holidays Great Barrier Reef",
      "Sentiment_score": 0.7783,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Seoul",
      "Tweet": "Diving among the depths greatbarrierreef scuba diving Batt Reef",
      "Sentiment_score": 0.1531,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Good times down under greatbarrierreef scuba diving selfie jackdouglasnash Batt Reef",
      "Sentiment_score": 0.4939,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "The light above beautifully pierced through the dark depths below greatbarrierreef scuba",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "A wall of coral greatbarrierreef scubadiving wall coral Batt Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "A wall of coral greatbarrierreef scubadiving wall coral Batt Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "A wall of coral greatbarrierreef scubadiving wall coral Batt Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Really can't capture the beauty of this place in a picture but I tried anyway thegreatbarrierreef",
      "Sentiment_score": -0.2584,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "cairns greatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "And now for your moment of zen Merry Christmas seashore coralreef greatbarrierreef",
      "Sentiment_score": 0.5423,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "GIGANTIC CLAM And all his little clam mates greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "oceanview greatbarrierreef Michaelmas Cay",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Walking through Paradise cairns greatbarrierreef kurandavillage",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "australia australiatrip cairns cairnstrip greatbarrierreef airplane",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Bogota",
      "Tweet": "Christmas gift Time to run in greatbarrierreef coral beach whitesand sand",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "scuba girl scuba girl not so afraid of the water now greatbarrierreef Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Super fun happeh times ahead greatbarrierreef Cairns Queensland Australia travel holiday",
      "Sentiment_score": 0.872,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Mumbai",
      "Tweet": "Under the sea under the sea greatbarrierreef Cairns Queensland Australia travel",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "tbt takemeback whereidratherbe whereidratherberightnow greatbarrierreef palmisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Wow so beautiful 7thwonderoftheworld greatbarrierreef cairns australia",
      "Sentiment_score": 0.8399,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Wellington",
      "Tweet": "scubadiving watersports tranquility water lover greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.765,
      "Sub_categories": [
        "scuba_diving",
        "watersport"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Day 2 on the greatbarrierreef Gordon s Mooring with this little guy Cairns Queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "swimming with turtles at greatbarrierreef cairns sealife coral reefs subadiving",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Seoul",
      "Tweet": "Great Barrier Reef camaratestigo diariodeviaje portdouglas greatbarrierreef Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The gorgeous Cay at the Great Barrier Reef",
      "Sentiment_score": 0.6124,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "australia greatbarrierreef cay green ocean",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "That beach",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "thegreatbarrierreef australia thisisQueensland queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Diving right into the land down under coralfordays greatbarrierreef ANZ2017 The Great",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Summer Vibes In Port Douglas is sailing the Coral Sea greatbarrierreef sailing marina",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "sailing"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "New Delhi",
      "Tweet": "view of the greatbarrierreef australia from a helicopter chopper ocean blue reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "A day spent on the great barrier reef thefatkidinside get the shirt Link on bio Hardy Reef",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Swam with a sea turtle greatbarrierreef cairns efcollegebreak",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Sandy high fives all around for how amazing 2017 has already been greatbarrierreef",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "tb Flying over the Great Barrier Reef in a seaplane whitsundayisland greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "seaturtle greatbarrierreef michaelmascay cairns australia happynewyear gopro Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "greatbarrierreef snorkeling coral mondayfunday pacific ocean",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "Here s to more adventures in 2017 Port Douglas QLD greatbarrierreef australia Great",
      "Sentiment_score": 0.7778,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Snorkel sisters with water noodles safety first",
      "Sentiment_score": 0.4215,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "snorkeling greatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "nofilter nautilusaviation greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Hong Kong",
      "Tweet": "nofilter nautilusaviation greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Alright let s see what all this fuss is about then greatbarrierreef turtle turtles",
      "Sentiment_score": 0.25,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "australia greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Alright let s see what all this fuss is about greatbarrierreef",
      "Sentiment_score": 0.25,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Life s more peaceful on the reef greatbarrierreef sealife ocean thisislife takethetrip",
      "Sentiment_score": 0.5413,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Great Barrier Reef snorkel fashion in stinger season greatbarrierreef stingersuit",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "How bout a little night divin teamsharkhunter greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "You can practice your underwater photography skills at the greatbarrierreef when you visit",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Eat Sail Dive Repeat whitsundays sailing greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving",
        "sailing"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Scuba diving and snorkeling on the great barrier reef today was the",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Down under in Down Under greatbarrierreef sharkhunting diving",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Beijing",
      "Tweet": "Diving Oz 2016",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Beijing",
      "Tweet": "diving padidivers openwaterdiver greatbarrierreef flynnreef millnreef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The gorgeous Don Nacho myga ignatiusjones mylove queensland greatbarrierreef portdouglas",
      "Sentiment_score": 0.6124,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Green Island greatbarrierreef australia travel travelphotography instatravel holidays",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Wishing I was still there daydreamisland whitsundays australia greatbarrierreef",
      "Sentiment_score": 0.2263,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Home of the exotic fishes greatbarrierreef australia arlingtonreef Cairns Queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Mamang diver nasaan si Dyesibel Hihi arlingtonreef greatbarrierreef australia arlington",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "newbusiness portdouglas greatbarrierreef scuba",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Making friends with Wally the Humphead Maori Wrasse rosa virtanen greatbarrierreef",
      "Sentiment_score": 0.4767,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Today was our greatbarrierreef cruise greatbarrier reef ocean pacificocean hamiltonisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The reef today thegreatbarrierreef Cairns passionsofparidise scuba The Great Barrier",
      "Sentiment_score": 0.5574,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Loving my roomwithaview with the greatbarrierreef at my doorstep and dolphins cruisin by to",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Australia YOU are so BEAUTIFULL axelhappy adelaide beach brisbane bbq beer greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "Raw footage of The Great Barrier Reef The colour of the water in unreal",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "thegreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "How about that for a tbt Oi lilspop greatbarrierreef scuba The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Flight out of LEI on a tiny Cessna",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "aov greatbarrierreef explore",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "carins greatbarrierreef australia Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "hardcoral softcoral clams nemo dori stingray shark turtle greatbarrierreef adventure",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "clams nemo dori shark turtle greatbarrierreef adventure macera cairns australia",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "nemo dori shark turtle greatbarrierreef adventure macera cairns australia faraway",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Bye cairns you were amazing solotraveller queensland visitcairns greatbarrierreef",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "whitesand relax whitehaven australia greatbarrierreef whitehavenbeach whitsundays",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Wenigstens war die Aussicht sch n greatbarrierreef flight australia Great Barrier Reef",
      "Sentiment_score": -0.8316,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "2011 australia cairns granbarreradecoral greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Time to swim with the fishies in the Great Barrier Reef BucketList greatbarrierreef oceanfreedom eastcoast",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "Taipei",
      "Tweet": "So much to see at the greatbarrierreef for small group snorkeling amp diving expeditions to",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "Tropicals The Ribbon Reefs cairns ribbonreefs greatbarrierreef coral australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Dive 3 greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Living on a boat sailing and snorkeling around the whitsunday island amp great barrier reef dreamy",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour",
        "sailing"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Australia day throwback to snorkeling in the great barrier reef last year THE DREAM",
      "Sentiment_score": 0.4084,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "lovesunshine greatbarrierreef australia topdeckjapan",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "Last day dive greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Cairns undersea greatbarrierreef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "scubadiving firsttime greatbarrierreef Whitsundays australia Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Buenos Aires",
      "Tweet": "I ve dreamed of seeing the greatbarrierreef since I can remember Here s a shot from the",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Great Barrier Reef Diving greatbarrierreef reef cairns",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Just lost my Leica at great barrier reefs greatbarrierreef Great Barrier Reef",
      "Sentiment_score": -0.3182,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Hello australia And what an opener it is with the greatbarrierreef Exploring the world",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "snokling tauchen sea australia nature greatbarrierreef beautiful experience nature",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "On the return from the greatbarrierreef a light squall along the advance edge of an",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "diving the great barrier reef first has set the bar high for the rest of this semester",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Enjoying the ambience of thegreatbarrierreef c2014 thumbnailtraveler travelblogger",
      "Sentiment_score": 0.5267,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Great barrier reef greatbarrierreef aussie australia beautiful nature safe nature",
      "Sentiment_score": 0.7783,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Madrid",
      "Tweet": "I don t want to go back to London australia greatbarrierreef queensland whitehavenbeach",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "beach",
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Time to set sail on another reef adventure beatsflying greatbarrierreef 2daysteam",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "sailing"
      ]
    },
    {
      "Timezone": "Santiago",
      "Tweet": "greatbarrierreef australia cairns The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Survived Scuba Diving scubadiving thegreatbarrierreef cairns queensland australia The",
      "Sentiment_score": 0.5574,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Madrid",
      "Tweet": "You stole my heart australia wanderer wandererlinggang thegreatbarrierreef The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Go fishing scubadiving queensland thegreatbarrierreef cairns australia The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "fishing_charter",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Greenland",
      "Tweet": "Day out snorkeling at the thegreatbarrierreef fun snorkeling Great Barrier Reef Australia",
      "Sentiment_score": 0.5106,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "thegreatbarrierreef scenicflight fly cairns queensland australia iloveaustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greenisland thegreatbarrierreef cairns queensland australia iloveaustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brasilia",
      "Tweet": "Cannot get enough of this place Hands down one of my favourite experiences greatbarrierreef whitsundays",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brasilia",
      "Tweet": "thegreatbarrierreef cairns queensland australia fly scenicflight Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "daydreamisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "A sparkling wine for her only cairns thegreatbarrierreef queensland australia",
      "Sentiment_score": 0.296,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "seeing the whitsundays and the great barrier reef from above was",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Bangkok",
      "Tweet": "Why don't we have these at home vendingmachine slippers cairns greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Snorkel head whitehavenbeach whitehaven snorkeling greatbarrierreef Whitehaven Beach",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Dublin",
      "Tweet": "Cairns from the plane where s the Great Barrier Reef viewfromabove greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Hanoi",
      "Tweet": "A red to my beautiful self Shiraz borassavalley australianwine thegreatbarrierreef",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "valley"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "crab anemone home macro symbiosis greatbarrierreef portdouglas",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Warning you may get dizzy such a great time snorkeling at the greatbarrierreef at",
      "Sentiment_score": 0.2023,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Great barrier Reef excursion greatbarrierreef australia cairns excursion boat",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "i peed in the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "PortDouglas does it again Another stunning wetseason day ReefMarina Hemingways greatbarrierreef",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Cloudless sky blogger de solotravel worldcaptures greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Scuba diving scubadiving greatbarrierreef cairns austrailia mumanddaughter stingsuits",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "great barrier Reef snorkeling greatbarrierreef portdouglas queensland Port Douglas",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Great Barrier Reef greatbarrierreef scubadiving austrailia scuba cairns nemo",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "Great day on the Great Barrier Reef greatbarrierreef cairns austrailia scubadiving",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Off to the Great Barrier Reef greatbarrierreef mumanddaughter austrailia cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "greatbarrierreef gbr",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "kuranda",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "forest"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "palmcove",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Most definitely an amazing underwater experience with awesome oz greatbarrierreef marinelife",
      "Sentiment_score": 0.9033,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Arizona",
      "Tweet": "greatbarrierreef tortoise sealife zeeschildpad wildlife photobylouiseonmycamera",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "Pretending to be a mermaid greatbarrierreef snorkeling Great Barrier Reef",
      "Sentiment_score": 0.1027,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "heartreef greatbarrierreef fromplanewindow Whitsunday Island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Arlie Beach jumping off point to the Whitsunday island and the reef greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Wetsuit ready snorkeling greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "diving greatbarrierreef cairns Great Barrier Reef",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Diving in the greatbarrierreef he was bigger than he looks underthesea Green Island",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "sailing amp snorkeling",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "sailing",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Mountain Time (US & Canada)",
      "Tweet": "australia cairns greatbarrierreef scubadiving fish turtle",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Edinburgh",
      "Tweet": "Great day with cruisingwhitsunday seeing the greatbarrierreef Home to hamiltonisland now",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Sympa l aquarium greatbarrierreef australia Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "australia cairns greatbarrierreef greenisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "27 years ago feels like a few weeks greatbarrierreef australia",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "J ai crois Nemo aujourd hui greatbarrierreef australia Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Night out for the fish greatbarrierreef snorkeling nature sea love fun fish gopro",
      "Sentiment_score": 0.8176,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Jakarta",
      "Tweet": "Meet Hamish the humphead maori wrasse on the Great Barrier Reef giant greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Dublin",
      "Tweet": "diving greatbarrierreef Australia",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Excited for our GBR trip tomorrow sharks findingnemo greatbarrierreef mostexpensivebeers",
      "Sentiment_score": 0.34,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "How about that ride in fnq greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "More grouper awesomeness lively surprised at Australia s greatbarrierreef Love these big",
      "Sentiment_score": 0.8505,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "That authentic Friday feeling earth underthesea underwater greatbarrierreef coral reef",
      "Sentiment_score": 0.128,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Beaut green turtle greatbarrierreef namedhimrover snorkeling gopro turtle australia",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Had a wonderful day with these ladies cairns greatbarrierreef",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "australia hamilton greatbarrierreef ocean active tuberide",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "jet_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "nofilter zoological splendor at the greatbarrierreef in australia s superb Queensland",
      "Sentiment_score": 0.8442,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "Heartreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "aviationlovers aviation australia greatbarrierreef heartreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "nofilter beauty just underthesea at the greatbarrierreef in australia s wonderful",
      "Sentiment_score": 0.8176,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Canberra",
      "Tweet": "Lovin my Sharks greatbarrierreef scubadiving nofilter diver diving ocean explorer",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef australia nature takecareofourplanet climatechangeisreal Whitehaven",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef saveourplanet australia climatechange Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "greatbarrierreef ocean australia blue beautiful Great Barrier Reef",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef ocean australia The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef Australia lushlife tags4tags bucketlist instagood queensland virtuoso",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Big Heavy on the GBR Photo andy aussiegranders greatbarrierreef gbr australia marlinstar",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "Flying over greatbarrierreef lizardisland Australia lushlife tags4tags bucketlist",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Check out this week s DiveoftheWeek in Oceans",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "scuba greatbarrierreef GBR reef padi",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "This view relaxes me greatbarrierreef straya australia pacificocean boat myview ocean",
      "Sentiment_score": 0.3612,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Flying over greatbarrierreef Australia lizardisland lushlife tags4tags bucketlist",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Heart reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "australia greatbarrierreef heart heartreef coral sea blue travel",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Pre and post snorkeling on greatbarrierreef Adventure virtuosoozedu bucketlist tags4tags",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Sunset cruise on greatbarrierreef lizardisland virtuoso virtuosoozedu queensland Adventure",
      "Sentiment_score": 0.6486,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Leaving lizardisland greatbarrierreef virtuosoozedu bucketlist lushlife Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "latergram greatbarrierreef cairns australia australien queensland snorkeling",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Great Barrier Reef views from onboard deepseadiversden australia greatbarrierreef barrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Cole said who knew their were ducks at the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Michaelmas Cay Great Barrier Reef Queensland machaelmascay greatbarrierreef queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "snorkeling at the great barrier reef to finish off aus",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef portdouglas",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "Awestruck At great barrier reef greatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "farnorthqueensland greatbarrierreef hometown",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Read about my adventure snorkeling at The Great Barrier Reef greatbarrierreef Australia",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "nofilter nature ocean greatbarrierreef cairns australia queensland instawow diving",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Post snorkel hair maskface greatbarrierreef quicksilvertours bucketlist amazing australia",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "Great Barrier Reef greatbarrierreef snorkling vacation Australia Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Cracking day on the GBR with Lady Musgrave Experience thisisqueensland southerngreatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Berlin",
      "Tweet": "Cheers prodivecairns for a jokes adventure once again Australia greatbarrierreef scubadiving",
      "Sentiment_score": 0.7506,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "A few of my favorite photos from scuba in the greatbarrierreef australia shot with my",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "daintreerainforrest greatbarrierreef capetribulationbeach",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "forest"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "the great barrier reef brb switching my major to environmental science to save this beautiful place",
      "Sentiment_score": 0.8327,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "A quick video of some of my new friends from thegreatbarrierreef shot with my galaxys7 The",
      "Sentiment_score": 0.4767,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Irkutsk",
      "Tweet": "latergram needsunshine ocean australia australien Queensland greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Monday scuba diving greatbarrierreef Cairns Australia snorkeling fatherdaughter pacific",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Monday scuba diving greatbarrierreef Cairns Australia snorkeling dad pacific Great",
      "Sentiment_score": 0.6597,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Chennai",
      "Tweet": "Monday scuba diving greatbarrierreef Cairns Australia snorkeling blue pacific",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Monday scuba diving greatbarrierreef Cairns Australia snorkeling fatherdaughter pacific",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Dublin",
      "Tweet": "Dive buddy greatbarrierreef travelphotography travelbae The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Mumbai",
      "Tweet": "snorkeling greatbarrierreef cruise coralreef paradise bestvacations beautifulplaces",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "cruise",
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Come snorkel with me in the stunningly beautiful greatbarrierreef LizardIsle loving it thanks Australia",
      "Sentiment_score": 0.8934,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Magnificent marinelife dazzles in thegreatbarrierreef as we snorkel the great expert",
      "Sentiment_score": 0.8402,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "EPIC days off explorin australia amp the great barrier reef went snorkeling submarining and",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Place where the Rainforrest meets the greatbarrierreef the closest",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "On a boat somewhere fambam snorkling boating posers thegreatbarrierreef The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour",
        "boat_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Best day scubadiving on the greatbarrierreef today Port Douglas Tropical North Qld",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "sarunekotravels travelgram triangl trianglgirls greatbarrierreef cairns latergram",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Berlin",
      "Tweet": "bucketlist snorkeling on the greatbarrierreef australia seeaustralia lizardisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "I miss the ocean so much australia australien cairns greatbarrierreef Queensland",
      "Sentiment_score": -0.1531,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "On a boat somewhere fambam snorkling boating posers thegreatbarrierreef The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour",
        "boat_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Australia greatbarrierreef scubadiving straya Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Australia greatbarrierreef scubadiving straya Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "No better way to start the day than a sunrise snorkel on the greatbarrierreef What an",
      "Sentiment_score": 0.1779,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Mumbai",
      "Tweet": "The ocean brings eternal joy to the soul greatbarrierreef Great Barrier Reef Australia",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "New Delhi",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "australia australianicon olympustg4tough jellyfish stinger reef greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "australia australian olympustg4tough olympuscamera greatbarrierreef coral bluefish",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "australia snorkeling greatbarrierreef reef bluesuit olympustg4tough olympuscamera mask",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "australia greatbarrierreef olympustg4tough snorkeling wetsuit underwaterphotography",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Dino hunting out at the Great Barrier Reef noluck greatbarrierreef australia dinohat",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "australia australian greatbarrierreef coral olympuscamera olympustg4tough yellowfish",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Berlin",
      "Tweet": "Epic lowtide mangrove day physiosharkOz JCUOIRS orpheusisland greatbarrierreef reefsharks conphys rigged",
      "Sentiment_score": -0.3612,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef discoveraustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Mumbai",
      "Tweet": "tbt lovelymemories greatbarrierreef myloveandi enjoylife",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Another one ticked off the bucket list Flight over the GBR",
      "Sentiment_score": -0.4215,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "nofilter greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef discoveraustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Just booked our reef boat for tomorrow Can t wait greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Jellyfish photobomb ajourneylife jellyfish greatbarrierreef reef dive",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Kuala Lumpur",
      "Tweet": "Tomorrow we scuba dive to the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "What an amazing day on the greatbarrierreef turtles reefsharks coral Thank you Australia once again",
      "Sentiment_score": 0.743,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "if i wake up hungover for this great barrier reef tour i m putting weights on my body and drowning myself",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Berlin",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "On of my shoot during my second dive of a huge groupers of 2meters on The greatbarrierreef",
      "Sentiment_score": -0.0258,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "australia greatbarrierreef reef diving",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "When my brother became friends with the sea turtle dude worldturtleday EAC greatbarrierreef",
      "Sentiment_score": 0.4767,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "0 10 leghe sotto l oceano reef greatbarrierreef qld eastcoast australia aussieexperience",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Beautiful Nudey s Beach on Fitzroy Island greatbarrierreefmarinepark tropicalnorthqueensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "fabulousfriday at the greatbarrierreef looks like this thanks to sailawayaristos Thank",
      "Sentiment_score": 0.8113,
      "Sub_categories": [
        "sailing"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Amazing first day seeing amp diving the great barrier reef with Abc Small guided groups are the",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Rome",
      "Tweet": "Not a bad day to go swimming in the Great Barrier Reef greatbarrierreef Great Barrier Reef",
      "Sentiment_score": -0.5423,
      "Sub_categories": [
        "swimming"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "the great barrier reef changed my life",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Just done scuba on the great barrier reef Unreal experience",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "ladymusgrave australia aussie island greatbarrierreef reef paradise",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Happy worldoceansday and tbt to that time I had an amazing adventure at the greatbarrierreef",
      "Sentiment_score": 0.8689,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "I got to snorkel the Great Barrier Reef in Tropical North Queensland tnq greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Arizona",
      "Tweet": "Pretty high on life right now greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.4939,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "I was so terrified I did two dives",
      "Sentiment_score": -0.6478,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "australia greatbarrierreef diving cairns gopro",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "It s easy to see why the greatbarrierreef is considered the most spectacular coral reef in the",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Canberra",
      "Tweet": "The ideal way to enjoy the Whitsundays sailing bestholiday greatbarrierreef australia",
      "Sentiment_score": 0.765,
      "Sub_categories": [
        "sailing"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Intro scuba dive today in the greatbarrierreef Michaelmas Cay",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "there s a 90 chance im gonna go on a diving trip to the great barrier reef for free tomorrow truly my longest clink clink ever",
      "Sentiment_score": 0.8176,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "What an experience greatbarrierreef Thanks seastar cruises Cairns",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Place is amazing thegreatbarrierreef swamwithashark travel Outer Reef The Great Barrier Reef",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Scuba diving in the greatbarrierreef So happy that I found the courage to do this 2 intro",
      "Sentiment_score": 0.8173,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "holy shit i just got back from diving in the great barrier reef it was so sick wow",
      "Sentiment_score": -0.5366,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "crewpacific greatbarrierreefmarinecollege",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Madrid",
      "Tweet": "greatbarrierreef abellpointmarina AirlieBeach boats cruise Abell Point Marina",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach",
        "cruise"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Relaxing at the greatbarrierreefaustralia with OceanSafariCT not a bad way to start the day",
      "Sentiment_score": 0.7227,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "AirlieBeach Queensland beautiful nature life sunrise greatbarrierreef Airlie Beach",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "AirlieBeach Queensland beautiful nature life sunrise greatbarrierreef Arlie Beach",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "AirlieBeach Queensland beautiful nature life sunrise greatbarrierreef town Arlie Beach",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "Quito",
      "Tweet": "AirlieBeach walkies walking beautiful greatbarrierreef boats cruise bridge Airlie",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "beach",
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Perth",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland Australia",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Hawaii",
      "Tweet": "greatbarrierreef YorkeysKnob cruise boats beautiful Yorkeys Knob Queensland",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "boat_tour",
        "cruise"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "Epic check off my bucket list Diving the Great Barrier Reef greatbarrierreef cairns",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Epic check off my bucket list Diving the Great Barrier Reef greatbarrierreef cairns",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Michaelmas bird and turtle refuge at the Great Barrier Reef greatbarrierreef australia oz",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Gonna be a great day on the Great Barrier Reef australia cairns greatbarrierreef snorkeling",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "snorkeling on thegreatbarrierreef was truly amazing The Great Barrier Reef",
      "Sentiment_score": 0.7717,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "I saw sea turtles and manta rays in the Great Barrier Reef today so I may have had a better Monday than you bucketlist greatbarrierreef",
      "Sentiment_score": 0.4404,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Spending the day at the marina before heading out to sea for 3 days greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "irl forreal greenisland queensland thegreatbarrierreef australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "snorkeling the great barrier reef might be the coolest thing i ve done in my whole life",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "The corals are alive greatbarrierreef coralreef cains familyvacation2017",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Spot the green turtle The corals are alive greatbarrierreef coralreef cains",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Yup cairns greatbarrierreef queensland skyrailcairns skyrail The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "sky_diving"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "1meter wide clam greatbarrierreef australia underwater snorkel snorkeling scuba cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "greatbarrierreef beautiful atsea Queensland cruise Great Barrier Reef",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "The corals are alive greatbarrierreef coralreef cains familyvacation2017",
      "Sentiment_score": 0.3818,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "This one time when we got to snorkel the Great Barrier Reef gbr greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Quiet moment on the Cairns boardwalk australia greatbarrierreef cairns cloud clouds",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Anemone on the Great Barrier Reef michaelmascay australia cairns greatbarrierreef anemone",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "FEELING THE FREEDOM australia queensland fraserisland greatbarrierreef coralsea",
      "Sentiment_score": 0.8001,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Is never too late to make dreams come true scubadiving greatbarrierreef dreaming",
      "Sentiment_score": 0.6705,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Those who don t jump will never fly sky diving cairns sky thegreatbarrierreef amazing",
      "Sentiment_score": 0.5541,
      "Sub_categories": [
        "sky_diving"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Facing the power of cairns thegreatbarrierreef The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Some more pictures from the greatbarrierreef snorkeling emilygoesabroad Cairns Queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "The greatbarrierreef is so colourful it s like a rainbow Book a day tour with",
      "Sentiment_score": 0.4144,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Out over the greatbarrierreef heading to the freighter that Jin and Desmond are on",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Teeny tiny people snorkeling on the greatbarrierreef nautilusaviation helicopter The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "About to skydive over the great barrier reef from 15 000 ft",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "sky_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Made it greatbarrierreef smile s for days happy summer igers friends instagood",
      "Sentiment_score": 0.8519,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Always follow Crush while finding Nemo upolucay snorkeling nofilter greatbarrierreef cairns",
      "Sentiment_score": -0.1531,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "Getting ready for another beautiful day on the water greatbarrierreef Calypso portdouglas",
      "Sentiment_score": 0.7506,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Beijing",
      "Tweet": "diversden australia queensland greatbarrierreef Norman",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "thegreatoceanroad greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Beijing",
      "Tweet": "Nemo and Dory were both found during this adventure greatbarrierreef snorkeling bucketlist",
      "Sentiment_score": 0.3869,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Kolkata",
      "Tweet": "thegreatbarrierreef greatbarrierreef scuba",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "thegreatbarrierreef greatbarrierreef scuba",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel snorkeling dive diving tropics",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Sydney",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Chennai",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "thegreatbarrierreef greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Kolkata",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "A nofilter weekend traffic at the greatbarrierreef in Australia s superb CoralSea",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Seoul",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "thegreatbarrierreef greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral coralreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "thegreatbarrierreef greatbarrierreef cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef scuba",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef thegreatbarrierreef scuba",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "The Great Barrier Reef Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "thegreatbarrierreef greatbarrierreef coral coralreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "lizardisland lizardislandresearchstation greatbarrierreef sunset australia queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Cairns greatbarrierreef Australia island coral magnificent sky",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "island"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Love your planet vitaminsea greatbarrierreef The Great Barrier Reef",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Flying over the greatbarrierreef was one of the greatest things I ve ever done A once in a",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "cruise round the great barrier reef then a pub crawl round cairns yaaaaaas",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "cruise"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Saturday inspo greatbarrierreef australia lulifama lulifamaswimwear Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Early morning snorkeling adventure at Low Isles along the Great Barrier Reef greatbarrierreef",
      "Sentiment_score": 0.0516,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The Great Barrier Reef Cairns Australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "greatbarrierreef coral coralreef undersea",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Posting this as I step onto the boat to go scuba diving on the great barrier reef I m excited",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "He s my life guard rescuemeanyday island greatbarrierreef scubadiving paradise",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Epic diving on the greatbarrierreef with oceanquest",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Tokyo",
      "Tweet": "One of my ultimate travel ambitions To explore Australia s great barrier reef sea seas",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Greetings from the Great Barrier Reef scuba padi greatbarrierreef gopro padi The Great",
      "Sentiment_score": 0.7845,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Reef Magic The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef reefmagic blueseas wantthisagain",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "so excited to see the great barrier reef tomorrow",
      "Sentiment_score": 0.4005,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "I m on the Great Barrier Reef holiday qld greatbarrierreef coral aussiewinter australia",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Edinburgh",
      "Tweet": "watching globalwarming gbr greatbarrierreef reef coral barrier waterfront ocean sea",
      "Sentiment_score": -0.128,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "The joy of seeing a turtle in its natural habitat",
      "Sentiment_score": 0.743,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "turtle coralreef greatbarrierreef The",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Be happy for this moment This moment is your life greatbarrierreef hamiltonisland australia",
      "Sentiment_score": 0.5719,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "Missing Marine World already 55km from Cairns on the greatbarrierreef The Great Barrier Reef",
      "Sentiment_score": -0.296,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Back in cairns where this happened at last time at the greatbarrierreef oceam dive scuba ow",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "nofilterneeded tbt greatbarrierreef cairns oz queensland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "octopus snorkeling greatbarrierreef Lady Musgrave Island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef snorkeling Green Island",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "greatbarrierreef marine park authority office flinders townsville",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Returning from snorkeling greatbarrierreef hamiltonisland queensland seeaustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Ljubljana",
      "Tweet": "Went for a lil dip in the great barrier reef today Looking absolutely flawless with my mask and wetsuit",
      "Sentiment_score": 0.5563,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "finally at our next destination in australia get me in that great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brussels",
      "Tweet": "i loved snorkeling at the great barrier reef but it s so so sad to see firsthand how much it has died",
      "Sentiment_score": -0.8875,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Melbourne",
      "Tweet": "Snorkeling the greatbarrierreef was such an amazing experience I will come back for some",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Atlantic Time (Canada)",
      "Tweet": "Just a Tuesday in the office greatbarrierreef helicopter bestviews nofilter hamiltonisland",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Helicopter flight over the greatbarrierreef with a champagne stop at the STUNNING",
      "Sentiment_score": 0.516,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "scuba diving today in the great barrier reef and i m literally shitting myself",
      "Sentiment_score": -0.3612,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "WHALE",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "whale_watching"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Amazing interaction with a large Humpack whale on the way to the greatbarrierreef this",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "whale_watching"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Helicopter ride",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "thegreatbarrierreef nnxxrr The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "best day of my life i can t believe i scuba dived the great barrier reef today omg",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Finding Nemo coralbay cairns greatbarrierreef Australia visitaustralia travelgram",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Trovato Nemo e la sua amica tartaruga thegreatbarrierreef Australia donnapazza love blue",
      "Sentiment_score": 0.6369,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "snorkeling the Great Barrier Reef for viki leagas 23rd birthday",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Greenland",
      "Tweet": "greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Casablanca",
      "Tweet": "Great Barrier Reef snorkeling what a great day",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef snorkeling ocean",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Greenland",
      "Tweet": "Under the sea where the fish swim",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef savethereef cairns queensland australia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Singapore",
      "Tweet": "scubadiving greatbarrierreef cairns queensland australia The Great",
      "Sentiment_score": 0.6249,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "going snorkeling in the great barrier reef and getting to see Turtles amp Whales was by far the most incredible experience",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Not bad for a Monday greatbarrierreef scubadiving cairns australia The Great Barrier Reef",
      "Sentiment_score": -0.5423,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef discoveraustralia",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Beautiful one day perfect the next whitsundays queensland greatbarrierreef ocean sea",
      "Sentiment_score": 0.8225,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef cruise cylypso scubadiving diving travel",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "cruise",
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "Saftley landed Hamiltonisland greatbarrierreef travel adventire australia Beach Club",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "pretty cairns morgen waarschijnlijk snorkelen in the great barrier reef",
      "Sentiment_score": 0.4939,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "White haven beach whitesandbeach choppers adventure ysbh traveldollars greatbarrierreef",
      "Sentiment_score": 0.3182,
      "Sub_categories": [
        "beach"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "goodnight morgen snorkelen in the great barrier reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "greatbarrierreef Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "off my Bucket List australia straya greatbarrierreef cairns portdouglas thanksskipper",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Why wouldn t you take a helicopter flight over the greatbarrierreef to see the",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scenic_flight_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "My kind of guys amp gals greatbarrierreef underwater underwaterphotography GBR aussie",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "Oz greatbarrierreef snorkel cairns liveyourybr liveyouryellowbrickroad travel blogger",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "JST",
      "Tweet": "Oz greatbarrierreef snorkel cairns liveyourybr liveyouryellowbrickroad travel blogger",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Oz greatbarrierreef snorkel cairns liveyourybr liveyouryellowbrickroad travel blogger",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Hello from the bottom of the Great Barrier Reef greatbarrierreef scubadiving Great Barrier",
      "Sentiment_score": 0.5574,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "greatbarrierreef cairns Saxon Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Snorkeling the great barrier reef today",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "Athens",
      "Tweet": "Lovely day for it thirdtimelucky greatbarrierreef OneTownataTime StickingtoMyGuns",
      "Sentiment_score": 0.5859,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Lisbon",
      "Tweet": "20 years ago give or take somewhere on the greatbarrierreef pacificocean near Cairns",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Central Time (US & Canada)",
      "Tweet": "greatbarrierreef travelaustralia deepseadiversden boatlife Great Barrier",
      "Sentiment_score": 0.5574,
      "Sub_categories": [
        "boat_tour"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "Well I m truly photogenic huh greatbarrierreef australia coralsea tropics tropical",
      "Sentiment_score": 0.6124,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Rome",
      "Tweet": "greatbarrierreef dive holiday",
      "Sentiment_score": 0.4019,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "tbt flipagram greatbarrierreef cairnsdivecentre",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Pacific Time (US & Canada)",
      "Tweet": "The greatbarrierreef is home to 6 of the world s 7 marine turtles Some",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "submarine_creature"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Pristine farnorthqld queenslander greatbarrierreef Port Douglas",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "Pristine farnorthqld queenslander greatbarrierreef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Shades of Blue greatbarrierreef waterareyougonnado gonefishing The Great Barrier Reef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "fishing_charter"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "cairns greatbarrierreef australianlife blackandwhitephoto fishart Cairns City",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Mumbai",
      "Tweet": "greatbarrierreef gbr cairns australia diving snorkeling",
      "Sentiment_score": 0.0772,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Brisbane",
      "Tweet": "flippers greatbarrierreef gbr reef travel travelgram wanderlust solotravel",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Amsterdam",
      "Tweet": "Taking the plunge greatbarrierreef australia One of world s wonders Sad to see impact of climatechange on this",
      "Sentiment_score": -0.4767,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "That beautiful view The great barrier reef cairns",
      "Sentiment_score": 0.5994,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Madrid",
      "Tweet": "Next stop Hamilton Island hamiltonisland whitsundays greatbarrierreef",
      "Sentiment_score": -0.296,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "Paris",
      "Tweet": "thegreatbarrierreef increible inolvidable friends present australia iloveyouguys en",
      "Sentiment_score": 0.4767,
      "Sub_categories": [
        "general"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "Road trip day 1 amp 2 Cairns greatbarrierreef barronfalls",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "waterfall"
      ]
    },
    {
      "Timezone": "London",
      "Tweet": "greatbarrierreef scuba scubadiving padi savethereef",
      "Sentiment_score": 0.0,
      "Sub_categories": [
        "scuba_diving"
      ]
    },
    {
      "Timezone": "Eastern Time (US & Canada)",
      "Tweet": "greatbarrierreef turtles nemo coral snorkel dive diving tropics reef island holiday tern giantclam",
      "Sentiment_score": 0.4588,
      "Sub_categories": [
        "snorkeling_tour",
        "scuba_diving",
        "submarine_creature"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "had one of the best days of my life today snorkeling at the great barrier reef massive thank you to the Queensland tourist board",
      "Sentiment_score": 0.7717,
      "Sub_categories": [
        "snorkeling_tour"
      ]
    },
    {
      "Timezone": "None",
      "Tweet": "The falla the beautiful woodboat that took us out to the greatbarrierreef for a truly",
      "Sentiment_score": 0.7783,
      "Sub_categories": [
        "boat_tour"
      ]
    }
  ];
}
