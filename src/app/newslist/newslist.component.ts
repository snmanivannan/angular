import { Component, OnInit } from '@angular/core';
import { SrvNewsService } from '../shared/srv-news.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css'],
})
export class NewslistComponent implements OnInit {
  constructor(private newsService: SrvNewsService) {}
  isEditing = false;
  ngOnInit() {
    this.getNewsList();
  }
  posts;
  getNewsList = () =>
    this.newsService.getNewsList().subscribe((res) => (this.posts = res));

  addNew() {}
  
}
