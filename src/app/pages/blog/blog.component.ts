import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../providers/Article/Article.service';
import { Article } from '../../models/article/article';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {
  arrayArticle: Article[] = [];

  constructor(private _artService: ArticleService) {}

  ngOnInit(): void {
    this._artService.getArticle('articles').subscribe(
      (response) => {
        if (response.articles) {
          this.arrayArticle = response.articles;
        }
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
