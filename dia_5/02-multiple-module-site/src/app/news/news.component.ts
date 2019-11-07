import { Component, OnInit } from '@angular/core';
import { RSSClient } from '../../services/RSSClient';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [RSSClient]
})
export class NewsComponent implements OnInit {

  public news: Array<any> = [];

  constructor(private rssClient: RSSClient) {

  }

  ngOnInit() {
    this.loadNews();
  }

  ngOnDestroy() {

  }

  loadNews() {
    this.rssClient.getItems().subscribe(
      data => {
        this.news = data;
      },
      err => {
        alert("No s'ha pogut obtenir el llistat de notícies.");
      },
      () => {
      }
    );
  }

}
