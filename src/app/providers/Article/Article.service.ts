import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../models/article/article';
import { URL } from '../Constants/Constants';

@Injectable()
export class ArticleService {
  constructor(private _http: HttpClient) {
    console.log('constructor de article service cargado');
  }

  getArticle(rute: string): Observable<any> {
    return this._http.get(URL + rute);
  }

  getDetailArticle(rute: string, idArticle: string): Observable<any> {
    return this._http.get(rute + '/article/' + idArticle);
  }

  searchArticle(toSearch: string): Observable<any> {
    return this._http.get(URL + 'search/' + toSearch);
  }

  createArticle(articleObject): Observable<any> {
    let params = JSON.stringify(articleObject);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(URL + 'salvar', params, { headers: headers });
  }

  uploadeImage(id, articleObject): Observable<any> {
    console.log('------------');
    console.log('estas en uploadeImage');
    return this._http.post(URL + 'upload-image/' + id, articleObject);
  }

  update(id, articleObject): Observable<any> {
    let params = JSON.stringify(articleObject);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(URL + 'article/' + id, params, { headers: headers });
  }

  delete(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(URL + 'article/' + id, { headers: headers });
  }
}
