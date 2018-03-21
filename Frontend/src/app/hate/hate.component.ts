import { Component, OnInit } from '@angular/core';
// import { Chart } from 'angular2-highcharts';

@Component({
  selector: 'app-hate',
  templateUrl: './hate.component.html',
  styleUrls: ['./hate.component.css']
})
export class HateComponent implements OnInit {

    chart: any = undefined;

    info = {
        data: {
            // simulation data
        listTweets: [
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

    options: any;

    constructor() {
        // this.options = {
        //     title : { text : 'simple chart' },
        //     series: [{
        //         data: [29.9, 71.5, 106.4, 129.2],
        //     }]
        // };
    }
    // options: Object;

    ngOnInit() {
    }

    renderChart() {
        this.options = {
            chart: {
                type: 'column',
                marginLeft: 60, marginRight: 60, polar: false, spacingBottom: 40, spacingTop: 0, spacingLeft: 5, spacingRight: 5, animation: {
                    duration: 1500
                }
                , width: 600, height: 600
            },
            title: {
                text: 'Hate', align: 'center', verticalAlign: 'top', margin: 50, floating: !0, y: 30
            },
            legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
            },
            xAxis: {
            categories: this.getCategories(),
            labels: {
                x: -10
            }
            },
            // xAxis: {
            //     tickInterval: 1, min: 0, max: 5, categories: this.getCategories()
            // },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.y;
                }
            },
            yAxis: {
            allowDecimals: false,
            title: {
                text: 'Amount'
            }
            },
            responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
            },
            series: this.getData()
        };
    }

    getData() {
        return [{
        name: 'Hate',
        color: 'rgb(205, 220, 57)',
        data: [100, 10, 0, 61, 51]
        },
        {
        name: 'Clean',
        color: 'rgb(244, 67, 54)',
        data: [0, 90, 100, 39, 49]
        }];
    }

    getCategories() {
        const categories = ['Keyword', 'Oyoty Toxicity', 'Oyoty Hate', 'P.API Toxicity', 'P.API Obscene'];
        return categories;
    }


    selectTweet(tweet) {
        this.info.active = tweet;
        this.renderChart();
    }

    }

