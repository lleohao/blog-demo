import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlSchemeComponent } from './url-scheme/url-scheme.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [UrlSchemeComponent, PagesComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
