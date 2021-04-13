import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article/article';
import { URL } from '../../providers/Constants/Constants';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() propArrayArticles: Article[];
  urlImage: string = URL + 'get-image/';

  constructor() {}

  ngOnInit(): void {}
}
