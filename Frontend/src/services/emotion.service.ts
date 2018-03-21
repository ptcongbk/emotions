import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class EmotionService {

  constructor(private _http: Http) { }
  private _url = 'http://192.168.1.39:5000/';
  uploadFile(data?: any) {
    const headers = this.setHeadersForUpLoadFile();
    const options = new RequestOptions({
      method: RequestMethod.Post,
      url: this._url + 'image',
      headers: headers,
      body: data
    });
    return this.execute(options);
  }

  calculateSample(data?: any) {
    const headers = this.setHeadersForUpLoadFile();
    const options = new RequestOptions({
      method: RequestMethod.Post,
      url: this._url + 'sample_image',
      headers: headers,
      body: data
    });
    return this.execute(options);
  }


  getHeadersForUpLoadFile() {
    return this.setHeadersForUpLoadFile();
  }

  public setHeadersForUpLoadFile() {
    const authHeaders = new Headers();
    return authHeaders;
  }
  private execute(options: any) {
    return this._http.request(new Request(options))
      .map((res: any) => {
        var data = res.json();
        if (data.statusCode === 401) {
          return 'Not found';
        }
        return res;
      })
      .catch((res: Response) => {
        if (res.json())
          return Observable.throw(res.json());
        return Observable.throw(res);
      });
  }
}
