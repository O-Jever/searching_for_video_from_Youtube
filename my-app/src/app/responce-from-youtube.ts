import { ResponceInterface } from './responce-interface';

export class ResponceFromYoutube {
    private responceItems: ResponceInterface; 
    
    constructor(responceItems){
        this.responceItems = responceItems['items'].map(res => {
              return {
                videoId: res['id']['videoId'],
                title: res['snippet']['title'],
                description: res['snippet']['description'],
                imgUrl: res['snippet']['thumbnails']['medium']
              };
        });
    }

    public getResponceFromYoutube() : object {
        return this.responceItems;
    }
}
