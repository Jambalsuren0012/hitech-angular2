import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TargetpageComponent } from './pages/targetpage/targetpage.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';
import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';
import { NewsDetailsPageComponent } from './pages/news-details-page/news-details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { MenuListPageComponent } from './pages/menu-list-page/menu-list-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

const routes: Routes = [
  { path: 'map/:mapid', component: TargetpageComponent },
  { path: '', component: HomePageComponent },
  { path: 'news/:id', component: NewsDetailsPageComponent },
  { path: 'type/1/:id', component: MenuListPageComponent },
  { path: 'type/2/:id', component: DefaultPageComponent },

  { path: 'book/category/:bookid', component: BookDetailsPageComponent },
  { path: 'news/category/:newsid', component: BookDetailsPageComponent },
  { path: 'news', component: ListPageComponent },
  { path: 'books', component: BooksPageComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '', redirectTo: '/map2', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Ensures the page scrolls to the top on navigation
      anchorScrolling: 'enabled', // Optional: Enables anchor scrolling
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
