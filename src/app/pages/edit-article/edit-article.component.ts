import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from '../../providers/CustomValidator/custom-validator.service';
import { ArticleService } from '../../providers/Article/Article.service';
import { Article } from '../../models/article/article';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { URL } from '../../providers/Constants/Constants';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
  providers: [ArticleService],
})
export class EditArticleComponent implements OnInit {
  public articleForm: FormGroup;
  articleObjectResponse;
  article: any = {};
  catchFile;
  URL = URL
  constructor(
    private formBuilder: FormBuilder,
    private _httpProvider: ArticleService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      let idArticle = params['id'];
      this._httpProvider.getDetailArticle(URL, idArticle).subscribe(
        (response) => {
          console.log(response);
          this.articleObjectResponse = response.article;
          console.log(this.articleObjectResponse);
          this.buildForm();
        },
        (error) => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  upLoad(data) {
    this.catchFile = data.target.files[0];
  }
  private buildForm() {
    this.articleForm = this.formBuilder.group({
      title: [
        this.articleObjectResponse.title,
        // Validators.required
      ],
      image: [
        '',
        [
          // Validators.required,
          // // Validators.email,
          // Validators.pattern(/^[0-9]/),
          // Validators.pattern(/1$/),
        ],
      ],
      content: [
        this.articleObjectResponse.content,
        [
          // Validators.required,
          // Validators.minLength(minPassLength),
          // CustomValidatorService.validateNumber,
          // CustomValidatorService.validateDollar,
        ],
      ],
    });
    //this.articleForm.controls.title.setValue('title cambiado desde el modelo')
  }

  // validate() {
  //   if (this.articleForm.invalid) {
  //     console.log('invalido');
  //     console.log(this.articleForm);
  //   }
  //   if (this.articleForm.valid) {
  //     console.log('formulario valido');
  //     console.log(this.articleForm);
  //   }
  // }

  createArticle() {
    this.article = new Article(
      this.articleObjectResponse._id,
      this.articleForm.value.title,
      this.articleForm.value.content,
      this.articleObjectResponse.image,
      this.articleObjectResponse.date
    );
    this._httpProvider
      .update(this.articleObjectResponse._id, this.article)
      .subscribe(
        (response) => {
          if (this.catchFile) {
            let id = response.article._id;
            let form = new FormData();
            form.append('file0', this.catchFile, this.catchFile.name);
            this._httpProvider.uploadeImage(id, form).subscribe(
              (response) => {
                this._router.navigate([
                  '/detalleArticle/' + response.article._id,
                ]);
              },
              (error) => {
                console.log(error);
              }
            );
          }

          if (!this.catchFile) {
            this._router.navigate(['/detalleArticle/' + response.article._id]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
