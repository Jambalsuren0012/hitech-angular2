import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TargetpageComponent } from './pages/targetpage/targetpage.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';
import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';
import { NewsDetailsPageComponent } from './pages/news-details-page/news-details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MenuListPageComponent } from './pages/menu-list-page/menu-list-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MenuAboutPageComponent } from './pages/menu-about-page/menu-about-page.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { MembersdetailsComponent } from './pages/membersdetails/membersdetails.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: 'map/:id', component: TargetpageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'home:/:lang', component: HomePageComponent },
  { path: 'news-details/:id', component: NewsDetailsPageComponent },
  { path: 'list/:type/:id', component: MenuListPageComponent },
  { path: 'aboutus/:id', component: MenuAboutPageComponent },
  { path: 'content/:id', component: MenuAboutPageComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'book-details/:id', component: BookDetailsPageComponent },
  { path: 'member-details/:id', component: MembersdetailsComponent },
  { path: 'news/:id', component: NewsPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'timeline/:id', component: TimelineComponent },
  { path: 'book/:id', component: AllBooksComponent },
  { path: 'book', component: AllBooksComponent },
  { path: 'gallery/:id', component: GalleryPageComponent },
  { path: 'search/:term', component: SearchresultComponent },
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
