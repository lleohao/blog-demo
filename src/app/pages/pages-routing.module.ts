import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrlSchemeComponent } from './url-scheme/url-scheme.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'url-scheme',
        component: UrlSchemeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
