import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { map } from 'rxjs/operators';
import { ResponceFromYoutube } from './responce-from-youtube';
import { ResponceInterface } from './responce-interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(public http: HttpClient) {}

  public getInfoAboutVideo (keyWords: string) : Observable<ResponceInterface> {
    keyWords = encodeURI(keyWords);
    //переписать с помощью http params
    let fullUrl = environment.url + '?part=snippet' + '&q=' + keyWords + '&type=' 
    + environment.type + '&maxResults='+ environment.maxResults + '&regionCode=' 
    + environment.regionCode + '&key=' + environment.keyApi;
     return this.http.get(fullUrl)
      .pipe(
        map((res) => {
          //const responceFromYoutube = new ResponceFromYoutube(res);
          //return responceFromYoutube.getResponceFromYoutube();
          return res['items'].map(result => {
            return {
              videoId: result['id']['videoId'],
              title: result['snippet']['title'],
              description: result['snippet']['description'],
              imgUrl: result['snippet']['thumbnails']['medium']
            };
          });
        }));
  }
}
