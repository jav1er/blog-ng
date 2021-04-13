import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from '../../providers/CustomValidator/custom-validator.service';
import { ArticleService } from '../../providers/Article/Article.service';
import { Article } from '../../models/article/article';
import { Router } from '@angular/router';
import { URL } from '../../providers/Constants/Constants';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  providers: [ArticleService],
})
export class CreateArticleComponent implements OnInit {
  public articleForm: FormGroup;

  article: any = {};
  catchFile;
  constructor(
    private formBuilder: FormBuilder,
    private _httpProvider: ArticleService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  upLoad(data) {
    this.catchFile = data.target.files[0];
  }
  private buildForm() {
    const name = '1';
    const minPassLength = 4;
    this.articleForm = this.formBuilder.group({
      title: [
        name.toLowerCase(),
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
        '',
        [
          // Validators.required,
          // Validators.minLength(minPassLength),
          // CustomValidatorService.validateNumber,
          // CustomValidatorService.validateDollar,
        ],
      ],
    });
  }

  validate() {
    if (this.articleForm.invalid) {
      console.log('invalido');
      console.log(this.articleForm);
    }
    if (this.articleForm.valid) {
      console.log('formulario valido');
      console.log(this.articleForm);
    }
  }

  createArticle() {
    this.article = new Article(
      '',
      this.articleForm.value.title,
      this.articleForm.value.content,
      this.articleForm.value.image,
      null
    );
    this._httpProvider.createArticle(this.article).subscribe(
      (response) => {
        console.log(response);
        let id = response.article._id;
        console.log('id del articulo' + id);
        let form = new FormData();
        form.append('file0', this.catchFile, this.catchFile.name);
        this._httpProvider.uploadeImage(id, form).subscribe(
          (response) => {
            console.log(response);
            this._router.navigate(['/blog']);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
