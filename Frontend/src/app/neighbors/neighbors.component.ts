import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-neighbors',
  templateUrl: './neighbors.component.html',
  styleUrls: ['./neighbors.component.css']
})
export class NeighborsComponent implements OnInit {

    info= {
      data: {
          // simulation data
        listWords: [
          'plzplzplz',
          'hahahehehe',
          'playingpingpong',
          'fuck',
          'trump',
          'suckit',
          'weirdoman',
          'willkillyou',
          'comeon',
          'idiott',
          'haoccho',
          'looooooollllz',
          'okkkkk'
        ]
      },
      active: '',
      outputData: {
        ourOyoty: [],
        glove: []
      }
    };

    constructor(
    ) {}


    selectWord(word) {
        this.info.active = word;
        this.update();
        // this.info.outputData.word = word;
    }

    ngOnInit() {
    }

    update() {
      this.info.outputData = {
        ourOyoty: [
          'plzplzplz',
          'pleassssee',
          'plzplz',
          'pleeeaaassee',
          'pleaaassee',
          'plez',
          'pleasssee',
          'pleaaasse',
          'pleasssssse',
          'pleeeaassee'
        ],
        glove: [
          'pleasssee',
          'pleaaasse',
          'pleasssssse',
          'pleeeaassee'
        ]
      };
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