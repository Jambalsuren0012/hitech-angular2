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
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MenuAboutPageComponent } from './pages/menu-about-page/menu-about-page.component';
import { ResponsiveHtmlPipe } from './responsive-html.pipe';
import { MembersComponent } from './components/members/members.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
const routes: Routes = [
  { path: 'map/:id', component: TargetpageComponent },
  { path: '', component: HomePageComponent },
  { path: 'news/:id', component: NewsDetailsPageComponent },
  { path: 'list/:type/:id', component: MenuListPageComponent },
  { path: 'member', component: MembersComponent },
  { path: 'aboutus/:id', component: MenuAboutPageComponent },
  { path: 'type/2/:id', component: DefaultPageComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'book/category/:bookid', component: BookDetailsPageComponent },
  { path: 'news/category/:newsid', component: BookDetailsPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'books', component: AllBooksComponent },
  { path: '', redirectTo: '/map2', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Ensures the page scrolls to the top on navigation
      anchorScrolling: 'enabled',

      // Optional: Enables anchor scrolling
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
