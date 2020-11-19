import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-scheme',
  templateUrl: './url-scheme.component.html',
  styleUrls: ['./url-scheme.component.scss'],
})
export class UrlSchemeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleHrefClick(): void {
    location.href = 'zhihu://articles/296580539';
  }

  handleOpenClick(): void {
    window.open('zhihu://articles/296580539');
  }
}
