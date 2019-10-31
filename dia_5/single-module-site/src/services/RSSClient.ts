import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAPIClient } from './HttpAPIClient';

@Injectable()
export class RSSClient extends HttpAPIClient {

  getItems():any {
    return Observable.create(observer => {

      super.getContentFromURL("http://www.lafruitera.com/feed.xml", "text").subscribe(
        data => {
          let items: Array<any> = [];
          var domParser = new DOMParser()
          let doc = domParser.parseFromString(data, "text/xml")
          doc.querySelectorAll("item").forEach((item) => {
            let title = item.querySelector("title").innerHTML;
            let description = item.querySelector("description").innerHTML;
            let date = item.querySelector("pubDate").innerHTML;
            let img_url = item.querySelector("enclosure").getAttribute('url');

            items.push({image: img_url,
                        title: title,
                        description: description,
                        date: date});
          });
          observer.next(items);
          observer.complete();
        },
        err => {
          observer.error(err);
        },
        () => {
        }
      );

    });
  }

}
