import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TargetpageComponent } from './components/targetpage/targetpage.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';
import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';
import { NewsDetailsPageComponent } from './pages/news-details-page/news-details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  { path: 'map/:mapid', component: TargetpageComponent },
  { path: '', component: HomePageComponent },
  { path: 'news/:id', component: NewsDetailsPageComponent },

  { path: 'book/category/:bookid', component: BookDetailsPageComponent },
  { path: 'news/category/:newsid', component: BookDetailsPageComponent },
  { path: 'news', component: ListPageComponent },
  { path: '', redirectTo: '/map2', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
