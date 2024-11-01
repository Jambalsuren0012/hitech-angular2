import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TargetpageComponent } from './components/targetpage/targetpage.component';
import { BookDetailsPageComponent } from './pages/book-details-page/book-details-page.component';

const routes: Routes = [
  { path: 'map/:mapid', component: TargetpageComponent },
  { path: '', component: HomePageComponent },
  { path: 'book/category/:bookid', component: BookDetailsPageComponent },
  { path: 'news/category/:newsid', component: BookDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
