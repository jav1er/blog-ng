import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticleService } from '../../providers/Article/Article.service';
import { URL } from '../../providers/Constants/Constants';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss'],
  providers: [ArticleService],
})
export class DetailArticleComponent implements OnInit {
  arrayArticle;
  url = URL + '/get-image/';
  constructor(
    private _httpService: ArticleService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      let idArticle = params['id'];
      this._httpService.getDetailArticle(URL, idArticle).subscribe(
        (response) => {
          console.log(response);
          this.arrayArticle = response.article;
        },
        (error) => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  deleteArt(idArticle) {
    this._httpService.delete(idArticle).subscribe(
      _ => this._router.navigate(['/blog']),
      error => {
        console.log(error);
        this._router.navigate(['/blog']);
      }
    );
  }
}
