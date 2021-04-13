import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  name:string
  lastname:string

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    console.log('en oninit')
    this._route.params.subscribe((params: Params)=>{
      this.name = params.name
      this.lastname = params.lastname
    })

  }

  redirection(){
    this._router.navigate(['/page','jarvis','rangel'])

  }

}
