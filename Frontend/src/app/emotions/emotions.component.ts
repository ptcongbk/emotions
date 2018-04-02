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
          url: 'http://farm8.staticflickr.com/7185/6865018980_cf85ee418b_z.jpg',
          text: 'Postcard for my own amusement.'
        }
      },
      {
        "sample": {
          id: 2,
          url: 'http://farm8.staticflickr.com/7566/15828956450_066991b9de_z.jpg',
          text: 'March for justice for victims of police violence.'
        }
      },
      {
        "sample": {
          id: 3,
          url: 'http://farm8.staticflickr.com/7170/6783525229_84712fb108_z.jpg',
          text: 'I was in awe standing under this giant structure, hope you enjoy the view too!'
        }
      },
      {
        "sample": {
          id: 4,
          url: 'http://farm9.staticflickr.com/8322/7985178629_2765a6179a_z.jpg',
          text: 'I love the quietness and contentment of the picture'
        }
      },
      {
        "sample": {
          id: 5,
          url: 'http://farm9.staticflickr.com/8065/8218149521_c93d73e960_z.jpg',
          text: 'The former fear of nuclear war shown in a graffiti'
        }
      },
      {
        "sample": {
          id: 6,
          url: 'http://farm6.staticflickr.com/5319/14245424704_c5633c9264_z.jpg',
          text: 'Everyday comes with new hope excitement happiness and sorrow...... Live the life with full compassion and make some memorable moments....Enjoy life'
        }
      },
      {
        "sample": {
          id: 7,
          url: 'http://farm5.staticflickr.com/4154/4845488208_582d9e3ae7_z.jpg',
          text: 'This was so disgusting, we captured a bunch of flies and then fed them popcorn, sausage and chicken.... they got so fat and sick they couldn\'t fly.'
        }
      },
      {
        "sample": {
          id: 8,
          url: 'http://farm8.staticflickr.com/7243/7385093896_3893a95745_z.jpg',
          text: 'Sadness, Plan d\'Aups, Sainte-Baume, Provence, France.'
        }
      },

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
      this.info.active.imageURL = 'http://farm3.staticflickr.com/2947/15177392630_e7886cd9f7_z.jpg';
      this.info.active.text = 'Absolutely amazing race';
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
    this.displayResult(text, '', body);
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
    this.displayResult(text, item.sample.url, body);
  }
  reload(e) {
    console.log(e);
  }

  displayResult(text, url, body) {
    var total = 0;
    var totalImage = 0;
    var totalText = 0;
    var fusionResult = body.results;
    var imageResult = body.imageResults;
    var textResult = body.textResults;
    fusionResult.forEach(element => {
      if (element > 0) total = total + element;
    });

    imageResult.forEach(element => {
      if (element > 0) totalImage = totalImage + element;
    });

    textResult.forEach(element => {
      if (element > 0) totalText = totalText + element;
    });

    this.closeImg();
    this.info.active.status = 1;
    if(url == ''){
      this.info.active.imageURL = 'http://18.217.170.62:5001/get_image?_t=' + new Date().getTime();
    }
    else{
      this.info.active.imageURL = url;
    }
    //this.info.active.imageURL = 'http://192.168.1.39:5001/get_image?_t=' + new Date().getTime();
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
      ,
      text: {
        amusement: (textResult[0] > 0 ? textResult[0] : 0) / totalText,
        anger: (textResult[1] > 0 ? textResult[1] : 0) / totalText,
        awe: (textResult[2] > 0 ? textResult[2] : 0) / totalText,
        contentment: (textResult[3] > 0 ? textResult[3] : 0) / totalText,
        disgust: (textResult[4] > 0 ? textResult[4] : 0) / totalText,
        excitement: (textResult[5] > 0 ? textResult[5] : 0) / totalText,
        fear: (textResult[6] > 0 ? textResult[6] : 0) / totalText,
        sadness: (textResult[7] > 0 ? textResult[7] : 0) / totalText,
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
