import { Component, OnInit } from '@angular/core';
import { SrvNewsService } from '../shared/srv-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  constructor(public newsService: SrvNewsService) {}

  ngOnInit(): void {}

  onSubmit() {
    let data = this.newsService.form.value;
    console.log(data);
    this.newsService.createPosts(data).then((res) => {
      console.log('created');
    });
    console.log('on submit completed');
  }

  cancelEditing() {}
}
