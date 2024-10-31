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
import { MapComponent } from './map/map.component';
import { TargetpageComponent } from './targetpage/targetpage.component';
import { BookDetailsPageComponent } from './book-details-page/book-details-page.component';
import { NewsDetailsPageComponent } from './news-details-page/news-details-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';

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
    NewsPageComponent,
    ListPageComponent,
    PrimaryPageComponent,
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
  providers: [provideClientHydration(), ...appConfig.providers], // Use appConfig providers
  bootstrap: [AppComponent],
})
export class AppModule {}
