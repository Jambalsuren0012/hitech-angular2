import { NgModule } from '@angular/core';
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
import { NewBookComponent } from './components/new-book/new-book.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClient } from '@angular/common/http';
import { appConfig } from './app.config';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MapComponent } from './components/map/map.component';
import { TargetpageComponent } from './components/targetpage/targetpage.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';
import { NewsDetailsPageComponent } from './pages/news-details-page/news-details-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxImageCompressService } from 'ngx-image-compress';

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
    NewBookComponent,
    HomeHeroComponent,
    MapComponent,
    TargetpageComponent,
    HomePageComponent,
    BookDetailsPageComponent,
    NewsDetailsPageComponent,
    BooksPageComponent,
    ListPageComponent,
    PrimaryPageComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,

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
})
export class AppModule {}
