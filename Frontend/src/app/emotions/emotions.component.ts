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
          url: 'http://greginhollywood.com/wordpress/wp-content/uploads/CQwypIRWcAA0bnr2-400x277.jpg',
          text: 'Bathing in blood as part of a Satanic ritual'
        }
      },
      {
        "sample": {
          id: 2,
          url: 'http://i.dailymail.co.uk/i/pix/2014/12/03/23B52C7F00000578-2859336-A_study_of_1_601_pupils_aged_10_and_11_in_Wales_found_that_six_p-a-3_1417626285523.jpg',
          text: 'e-cigarettes are acting as a nicotine gateway for children luring them to back to more harmful cigarettes.'
        }
      },
      {
        "sample": {
          id: 3,
          url: 'https://c1.staticflickr.com/3/2159/2199623217_b4130478d3.jpg',
          text: 'Bad, disgust cartoon for kids.'
        }
      },
      
      {
        "sample": {
          id: 4,
          url: 'http://farm9.staticflickr.com/8065/8218149521_c93d73e960_z.jpg',
          text: 'The former fear of nuclear war shown in a graffiti'
        }
      },
      {
        "sample": {
          id: 5,
          url: 'https://i.pinimg.com/originals/f0/55/e8/f055e8d73e9fd715afe7d50644cb8ba6.jpg',
          text: 'Psycho Killer Clown with blood knife'
        }
      },
     
      {
        "sample": {
          id: 6,
          url: 'https://c1.staticflickr.com/3/2516/3920475759_26a624d975_b.jpg',
          text: 'Please ,do not cut my head.'
        }
      },
      {
        "sample": {
          id: 7,
          url: 'http://bloody-disgusting.com/wp-content/uploads/2014/02/scarebears5.jpg',
          text: 'Terrify children with this scare bears'
        }
      },
      {
        "sample": {
          id: 8,
          url: 'https://c1.staticflickr.com/3/2650/4012108085_f75b5e5837_b.jpg',
          text: 'This one kind of freaked me out!'
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
      this.info.active.imageURL = 'https://i.pinimg.com/originals/52/b1/cb/52b1cb83b522a1f636149cd9b02d2168.jpg';
      this.info.active.text = 'Why do a lot of people find the gory, graphic torture and violence scenes in horror films pleasurable to watch?';
      this.info.active.outputData = {
        fusion: {
          amusement: 0.1,
          anger: 0,
          awe: 0.1530361348882634,
          contentment: 0.1478217575304954,
          disgust: 0.2478217575304954,
          excitement: 0,
          fear: 0,
          sadness: 0.4478217575304954,
        },
        image: {
          amusement: 0.011600000000000001,
          anger: 0.0024000000000000002,
          awe: 0.0347000000000001,
          contentment: 0.0033000000000000004,
          disgust: 0.15600000000000001,
          excitement: 0.112500000000000002,
          fear: 0.417300000000000003,
          sadness: 0.0026000000000000003,
        },
        text: {
          amusement: 0,
          anger: 0.6,
          awe: 0.1,
          contentment: 0,
          disgust: 0,
          excitement: 0,
          fear: 0,
          sadness: 0.3,
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
      this.info.active.imageURL = 'http://51.15.59.131:5000/get_image?_t=' + new Date().getTime();
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
