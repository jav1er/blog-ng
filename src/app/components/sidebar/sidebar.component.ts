import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public searchString: string;
  constructor(private _router: Router) {}

  searchArticle() {
    console.log('estas en searhArticle');
    this._router.navigate(['/buscar', this.searchString]);
  }
}
