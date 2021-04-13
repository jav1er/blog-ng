import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../providers/Article/Article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ArticleService],
})
export class HomeComponent implements OnInit {
  public arrayArticle;
  title: string = 'Últimos árticulos';
  constructor(private _artService: ArticleService) {}

  ngOnInit(): void {
    this._artService.getArticle('articles/last').subscribe(
      (response) => {
        if (response.articles) {
          this.arrayArticle = response.articles;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
