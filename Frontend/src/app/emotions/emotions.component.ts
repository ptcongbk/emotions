import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';
import { EmotionService } from '../../services/emotion.service';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})

export class EmotionsComponent implements OnInit {

  sampleDatas: any = [];
  info: any = {
    active: {
      status: 0, // loadding || true
      imageURL: null,
      text: '',
      outputData: {
      },
      userInput: '',
      fileName: '',
      isCalculating: false
    },
    options: [
    ],
    sampleDatas: [

    ],

  };

  chart: any;

  constructor(private _emotionService: EmotionService) {
    this.sampleDatas = [
      {
        "sample": {
          id: 1,
          url: 'https://images-na.ssl-images-amazon.com/images/I/71A2Gu5R7aL._SX425_.jpg',
          text: 'Absolutely stunning toy'
        }
      },
      {
        "sample": {
          id: 2,
          url: 'https://i.ytimg.com/vi/3-97rjdbHoo/maxresdefault.jpg',
          text: 'Those are swords not knives'
        }
      },
      {
        "sample": {
          id: 3,
          url: 'https://img3.goodfon.com/wallpaper/big/e/35/danboard-danbo-box-robot-toy.jpg',
          text: 'Broken heart'
        }
      },
      {
        "sample": {
          id: 4,
          url: 'https://images-na.ssl-images-amazon.com/images/I/81g8LWaWFHL._SL1500_.jpg',
          text: 'Happy and funny'
        }
      },
      {
        "sample": {
          id: 5,
          url: 'https://images-na.ssl-images-amazon.com/images/I/41ZzcetJl6L._SX355_.jpg',
          text: 'A lot of blood'
        }
      }

    ]

  }

  ngOnInit() {
    this.getRandomImage();
  }

  // events
  getRandomImage() {
    this.closeImg();
    if (this.info.active.status === 0 || this.info.active.status === 2) {
      // start loadding data
      this.info.active.status = 2;
      // TODO
      // setInterval(() => {
      this.info.active.status = 1;
      this.info.active.imageURL = 'https://c1.staticflickr.com/6/5095/5488630940_1c1e245877_n.jpg';
      this.info.active.text = 'Absolutely stunning image';
      this.info.active.outputData = {
        fusion: {
          amusement: 0.19914210758124126,
          anger: 0,
          awe: 0.6530361348882634,
          contentment: 0.1478217575304954,
          disgust: 0,
          excitement: 0,
          fear: 0,
          sadness: 0,
        },
        image: {
          amusement: 0.011600000000000001,
          anger: 0.0024000000000000002,
          awe: 0.9347000000000001,
          contentment: 0.0033000000000000004,
          disgust: 0.015600000000000001,
          excitement: 0.012500000000000002,
          fear: 0.017300000000000003,
          sadness: 0.0026000000000000003,
        },
        text: {
          amusement: 0.8,
          anger: 0,
          awe: 0.4,
          contentment: 0,
          disgust: 0,
          excitement: 0.3,
          fear: 0,
          sadness: 0,
        }
      };

      const outputData = this.info.active.outputData;
      for (const key in outputData) {
        if (outputData.hasOwnProperty(key)) {
          const element = outputData[key];
          this.info.options.push({
            op: this.bindData(outputData[key], key),
            principal: this.getPrincipal(outputData[key])
          });
        }
      }
      // }, 1000);
    }
  }

  getPrincipal(data: any) {
    let opacity = 0;
    let main = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        if (opacity < element) {
          opacity = element;
          main = key;
        }
      }
    }
    return {
      opacity,
      main
    };
  }

  bindData(data: any, key?: any) {
    const options = {
      chart: {
        marginLeft: 60, marginRight: 60, polar: true, spacingBottom: 40, spacingTop: 0, spacingLeft: 5, spacingRight: 5, animation: {
          duration: 1500
        }
        , width: 250, height: 250
      },
      exporting: {
        enabled: !1
      },
      title: {
        text: key ? key : '', align: 'center', style: { "color": "#333333", "fontSize": "13px", "fontWeight": "bold", "text-transform": "uppercase" }, verticalAlign: 'top', margin: 20, floating: !0, y: 20
      },
      legend: {
        enabled: !1
      },
      xAxis: {
        tickInterval: 1, min: 0, max: 8, categories: this.getCategories()
      },
      tooltip: {
        formatter: function () {
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
        pointPlacement: 'on', type: 'column', name: 'level', data: [
          data.amusement * 100,
          data.anger * 100,
          data.awe * 100,
          data.contentment * 100,
          data.disgust * 100,
          data.excitement * 100,
          data.fear * 100,
          data.sadness * 100
        ]
      }]
    };
    return options;
  }

  getCategories() {
    const categories = ['amusement', 'anger', 'awe', 'contentment', 'disgust', 'excitement', 'fear', 'sadness'];
    return categories;
  }

  saveInstance(chartInstance) {
    this.chart = chartInstance;
  }


  async uploadImage() {
    if (this.info.fileName == undefined || this.info.fileName == '' || this.info.userInput == undefined || this.info.userInput == '') {
      alert('Please select image and input text');
      return;
    }
    this.info.isCalculating = true;
    const formData = new FormData();
    formData.append('uploadFile', this.info.file, this.info.fileName);
    formData.append('text', this.info.userInput);
    var text = this.info.userInput;
    const result = await this._emotionService.uploadFile(formData).toPromise();
    var body = JSON.parse(result._body);
    this.displayResult(text, body);
  }

  fileChange(event) {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      let file = fileList[0];
      this.info.file = file;
      this.info.fileName = file.name

    }
  }
  closeImg() {
    this.info = {
      active: {
        status: 0, // loadding || true
        imageURL: null,
        text: '',
        outputData: {
        }
      },
      options: [
      ]
    };
  }
  async loadSample(id) {
   var item = this.sampleDatas.filter(function(item) {
      return item.sample.id === id;
    })[0];
    this.info.isCalculating = true;
    const formData = new FormData();
    formData.append('url', item.sample.url);
    formData.append('text', item.sample.text);
    var text = item.sample.text;
    const result = await this._emotionService.calculateSample(formData).toPromise();
    var body = JSON.parse(result._body);
    this.displayResult(text, body);
  }
  reload(e) {
    console.log(e);
  }

  displayResult(text, body) {
    var total = 0;
    var totalImage = 0;
    var fusionResult = body.results;
    var imageResult = body.imageResults;
    fusionResult.forEach(element => {
      if (element > 0) total = total + element;
    });

    imageResult.forEach(element => {
      if (element > 0) totalImage = totalImage + element;
    });

    this.closeImg();
    this.info.active.status = 1;
    this.info.active.imageURL = '';
    this.info.active.imageURL = 'http://192.168.1.39:5000/get_image?_t=' + new Date().getTime();
    this.info.active.text = text;
    this.info.isCalculating = false;
    this.info.active.outputData = {
      fusion: {
        amusement: (fusionResult[0] > 0 ? fusionResult[0] : 0) / total,
        anger: (fusionResult[1] > 0 ? fusionResult[1] : 0) / total,
        awe: (fusionResult[2] > 0 ? fusionResult[2] : 0) / total,
        contentment: (fusionResult[3] > 0 ? fusionResult[3] : 0) / total,
        disgust: (fusionResult[4] > 0 ? fusionResult[4] : 0) / total,
        excitement: (fusionResult[5] > 0 ? fusionResult[5] : 0) / total,
        fear: (fusionResult[6] > 0 ? fusionResult[6] : 0) / total,
        sadness: (fusionResult[7] > 0 ? fusionResult[7] : 0) / total,
      },
      image: {
        amusement: (imageResult[0] > 0 ? imageResult[0] : 0) / totalImage,
        anger: (imageResult[1] > 0 ? imageResult[1] : 0) / totalImage,
        awe: (imageResult[2] > 0 ? imageResult[2] : 0) / totalImage,
        contentment: (imageResult[3] > 0 ? imageResult[3] : 0) / totalImage,
        disgust: (imageResult[4] > 0 ? imageResult[4] : 0) / totalImage,
        excitement: (imageResult[5] > 0 ? imageResult[5] : 0) / totalImage,
        fear: (imageResult[6] > 0 ? imageResult[6] : 0) / totalImage,
        sadness: (imageResult[7] > 0 ? imageResult[7] : 0) / totalImage,
      }

    };
    const outputData = this.info.active.outputData;
    for (const key in outputData) {
      if (outputData.hasOwnProperty(key)) {
        const element = outputData[key];
        this.info.options.push({
          op: this.bindData(outputData[key], key),
          principal: this.getPrincipal(outputData[key])
        });
      }
    }
  }
}
