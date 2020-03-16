import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment'
import { map, catchError, delay } from 'rxjs/operators';
import { ResponceFromYoutube } from './responce-from-youtube';
import { InfoListAboutVideo } from './responce-interface';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(public http: HttpClient) {}

  public getInfoAboutVideo (keyWords: string) : Observable<InfoListAboutVideo> {
    keyWords = encodeURI(keyWords);
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet', {
      params: new HttpParams()
      .set(`q`, keyWords)
      .set(`type`, 'video')
      .set(`maxResults`, '12')
      .set(`regionCode`, 'RU')
      //.set('relevanceLanguage','ru')
      .set(`key`, environment.keyApi)
    }).pipe(
        //delay(300),
        map((res) => {
          console.log("Ответ от сервера", res)
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
      }),
      catchError(err => {  
        console.log(err); 
        alert("Сервис не доступен!");
        return throwError(err);
      })
      );
}
}
