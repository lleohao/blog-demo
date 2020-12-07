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
    location.href = 'fleamarket://item_note_fun';
  }

  handleOpenClick(): void {
    window.open('fleamarket://item_note_fun');
  }
}
