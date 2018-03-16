import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';
import { EmotionService } from '../../services/emotion.service';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})

export class EmotionsComponent implements OnInit {

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
    ]
  };

  chart: any;

  constructor(private _emotionService: EmotionService) { }

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
          amusement: 0.8,
          anger: 0,
          awe: 0.05,
          contentment: 0.05,
          disgust: 0.4,
          excitement: 0.06,
          fear: 0.2,
          sadness: 0.1,
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
        , width: 330, height: 330
      },
      exporting: {
        enabled: !1
      },
      title: {
        text: key ? key : '', align: 'center', verticalAlign: 'top', margin: 50, floating: !0, y: 30
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
    if(this.info.fileName  == undefined || this.info.fileName =='' || this.info.userInput == undefined|| this.info.userInput =='')
    {
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
    var total = 0;
    body.forEach(element => {
      if (element > 0) total = total + element;
    });
    var amusement = body[0] > 0 ? body[0] : 0;
    var anger = body[1] > 0 ? body[1] : 0;
    var awe = body[2] > 0 ? body[3] : 0;
    var contentment = body[3] > 0 ? body[3] : 0;
    var disgust = body[4] > 0 ? body[4] : 0;
    var excitement = body[5] > 0 ? body[5] : 0;
    var fear = body[6] > 0 ? body[6] : 0;
    var sadness = body[7] > 0 ? body[7] : 0;
    this.closeImg();
    this.info.active.status = 1;
    this.info.active.imageURL = '';
    this.info.active.imageURL = 'http://18.217.170.62:5001/get_image?_t=' + new Date().getTime();
    this.info.active.text = text;
    this.info.isCalculating = false;
    this.info.active.outputData = {
      fusion: {
        amusement: amusement / total,
        anger: anger / total,
        awe: awe / total,
        contentment: contentment / total,
        disgust: disgust / total,
        excitement: excitement / total,
        fear: fear / total,
        sadness: sadness / total,
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
  reload(e) {
    console.log(e);
  }

}
