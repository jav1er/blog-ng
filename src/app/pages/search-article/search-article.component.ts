import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../providers/Article/Article.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.scss'],
  providers: [ArticleService],
})
export class SearchArticleComponent implements OnInit {
  searchResultArray = [];
  constructor(
    private _httpProvider: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((arg) => {
      let toSearch = arg['article'];
      this._httpProvider.searchArticle(toSearch).subscribe((response) => {
        console.log(response);
        this.searchResultArray = response.articles
      },
      error =>{
        console.log(error);
        this.searchResultArray = []
        console.log(this.searchResultArray);

      });
    });
  }
}
