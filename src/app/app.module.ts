import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewscardSliderComponent } from './components/newscard-slider/newscard-slider.component';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClient } from '@angular/common/http';
import { appConfig } from './app.config';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TargetpageComponent } from './pages/targetpage/targetpage.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';
import { NewsDetailsPageComponent } from './pages/news-details-page/news-details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineComponent } from './components/timeline/timeline.component';
import { PartnersComponent } from './components/partners/partners.component';
import { MenuListPageComponent } from './pages/menu-list-page/menu-list-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoComponent } from './components/video/video.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MenuAboutPageComponent } from './pages/menu-about-page/menu-about-page.component';
import { MembersComponent } from './components/members/members.component';
import { ResponsiveHtmlPipe } from './responsive-html.pipe';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AllvideoPageComponent } from './pages/allvideo-page/allvideo-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { FilterPipe } from './filter.pipe';
import { MembersdetailsComponent } from './pages/membersdetails/membersdetails.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { OurToursComponent } from './our-tours/our-tours.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopToursComponent } from './top-tours/top-tours.component';
import { ReviewComponent } from './review/review.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

// Function to create the translation loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsCardComponent,
    NewscardSliderComponent,
    SearchPipe,
    VideoComponent,
    HomeHeroComponent,
    TimelineComponent,
    TargetpageComponent,
    HomePageComponent,
    BookDetailsPageComponent,
    NewsDetailsPageComponent,
    ListPageComponent,
    PrimaryPageComponent,
    SpinnerComponent,
    CarouselComponent,
    SidebarComponent,
    PartnersComponent,
    MenuListPageComponent,
    DefaultPageComponent,
    HomeNewsComponent,
    MapPageComponent,
    MenuAboutPageComponent,
    MembersComponent,
    ResponsiveHtmlPipe,
    AllBooksComponent,
    NewsPageComponent,
    AllvideoPageComponent,
    ContentPageComponent,
    MenuSidebarComponent,
    GalleryPageComponent,
    SearchresultComponent,
    FilterPipe,
    MembersdetailsComponent,
    AboutCardComponent,
    OurToursComponent,
    TopToursComponent,
    ReviewComponent,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    YouTubePlayerModule,

    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    provideClientHydration(),
    ...appConfig.providers,
    NgxImageCompressService,
  ], // Use appConfig providers
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
