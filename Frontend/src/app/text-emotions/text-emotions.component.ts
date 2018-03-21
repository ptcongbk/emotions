import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-text-emotions',
  templateUrl: './text-emotions.component.html',
  styleUrls: ['./text-emotions.component.css']
})
export class TextEmotionsComponent implements OnInit {

    info= {
        data: {
            // simulation data
            listTweet: [
            'ummm. no it didnt work so i guess im stuck with this uglyonee',
            'Gotta TeraByte of space to store movies',
            "HAPPY MOTHER'S DAY to ALL MOM'S HERE and to YOUR MOMS too",
            "Why don't you make me feel like you used to",
            "Oh fml its probs gunna be at shepards bush i hate it there",
            "Its beautiful outside. I wish i was in new york city. But this area is pretty cool. Hip and trendy.",
            "@kazzababe95 cut yourself a slice of cheese cake.. it makes everything better",
            "Also, WHERE IS MY TOY STORY 3 TEASER CARMIKE 14? YOU SAID THERE WOULD BE TOY STORY 3! Movie theater fail",
            "@TheRankinFiles to be fair, she was asking about mktg cd's, etc, but I suggested more and she never even emailed back.",
            "Version 2 of our live, interactive Trans-Siberian ticket planner is launched: http://tinyurl.com/c5ljwm - its very cool",
            "Had a shower. it's 5:55 PM. Triple 5's! Crap, it just turned 5:56",
            "oh yes, the Cavs win game5, now onto game6. it's still danger, they HAVE to win this one either, it's no shot for the championship",
            "@tarng Trudy's off Burnet...the one up north that no one goes to",
            "BTW, hey ppl. lol TGIF. Hopefully ur day is gr8. Mine is aight. Feeling like it kinda sux I got no plans 4 the wknd....",
            "Yeah it's Friday but I have to work at 5am tomorrow oh well going shopping afterwork",
            "I love ridding in this weather",
            "@opalbonfante Wonderful! Let me know what you think. Not light reading",
            "no Santa cruz for me but I do have an interview at jamba tomorrow morning (:",
            "Eating at Zippys with candace!",
            "HEY YOU' ALL SUCK;its anybody on there :s im so bored common answear me",
            "#whorewhore she is",
            "@DustBuny: being today and all, WE'RE GONNA USE THE FORCE to make it happen!",
            "wishes I could be the one going to our conference in the Bahamas next week"
            ]
        },
        active: null,
    };

    chart: any;

    options = {
        chart: {
            marginLeft: 60, marginRight: 60, polar: true, spacingBottom: 40, spacingTop: 0, spacingLeft: 5, spacingRight: 5, animation: {
                duration: 1500
            }
            , width: 600, height: 600
        },
        title: {
            text: 'Emotions', align: 'center', verticalAlign: 'top', margin: 50, floating: !0, y: 30
        },
        legend: {
            enabled: !1
        },
        xAxis: {
            tickInterval: 1, min: 0, max: 13, categories: this.getCategories()
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.x;
            }
        },
        yAxis: {
            min: 0, tickInterval: 10, tickPositions: [0, 20, 40, 60, 80, 100], minorTickInterval: 0, labels: {
                enabled: !1
            }
        },
        plotOptions: {
            series: {
                pointStart: 0, pointInterval: 1
            }
            , column: {
                pointPadding: 0, groupPadding: 0, colorByPoint: !0
            }
        },
        series: [{
            pointPlacement: 'on', type: 'column', name: 'level', data: this.getData()
        }]
    };

    constructor(
    ) {}
// simulation data
    getData() {
        return [{
            y: 100,
            // z: 54000
        },
        {
            y: 10,
            // z: 510000
        },
        {
            y: 20,
            // z: 44
        },
        {
            y: 10,
            // z: 1
        },
        {
            y: 50,
            // z: 77
        },
        {
            y: 10,
            // z: 35
        },
        {
            y: 10,
            // z: 44
        },
        {
            y: 10,
            // z: 11
        },
        {
            y: 10,
            // z: 12
        },
        {
            y: 10,
            // z: 44
        },
        {
            y: 10,
            // z: 89
        },
        {
            y: 10,
            // z: 123
        },
        {
            y: 10,
            // z: 12
        }];
    }

    getCategories() {
        const categories = ['love', 'happiness', 'fun', 'enthusiasm', 'surprise',
        'relief', 'neutral', 'empty', 'hate', 'anger', 'sadness', 'boredom', 'worry'];
        return categories;
    }

    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }

    selectTweet(tweet) {
        this.info.active = tweet;
        if (this.options.series[0].data[0].y > 100) {
            this.options.series[0].data[0].y -= 5;
        } else {
            this.options.series[0].data[0].y += 5;
        }
        this.chart.series[0].data[0].update({y: this.options.series[0].data[0].y});
        // delete this.chart;
        // this.chart = new Chart(this.options);
    }

    // chart :any = undefined;

    ngOnInit() {
    }

}










// option = {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'variablepie'
//     },
//     title: {
//         text: 'ummm. no it didnt work so i guess im stuck with this uglyonee'
//     },
//     tooltip: {
//         pointFormat: '<b>{series.name}: <b>{point.percentage:.1f}%</b>',
//         formatter: function(series){
//             // tslint:disable-next-line:curly
//             if (!(this.series.name === 'main')) {
//                 return false;
//             } else {
//                 return 'sssss';
//             }
//         }
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name} haha</b> %',
//                 style: {
//                     color: 'black'
//                 }
//             }
//         }
//     },
//     series: [{
//         name : 'main',
//         // innerSize: '0%',
//         data: [{
//             y: 10,
//             z: 1100
//         }, {
//             y: 10,
//             z: 2
//         }, {
//             y: 10,
//             z: 1
//         }, {
//             y: 10,
//             z: 3
//         }, {
//             y: 10,
//             z: 4
//         }, {
//             y: 10,
//             z: 5
//         }, {
//             y: 10,
//             z: 5
//         }]
//     },
//     {
//         name: 'u20',
//         size: '20%',
//         // innerSize: '19.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u40',
//         size: '40%',
//         // innerSize: '39.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u60',
//         size: '60%',
//         // innerSize: '59.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u80',
//         size: '80%',
//         // innerSize: '79.99%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     },
//     {
//         name: 'u100',
//         size: '100%',
//         // innerSize: '99.9%',
//         data: [{
//             y: 1,
//             color: 'transparent'
//         }]
//     }
//     ]
//   };
