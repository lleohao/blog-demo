import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlSchemeComponent } from './url-scheme/url-scheme.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [UrlSchemeComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
