import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { NewsService } from '../../service/news.service';
import { TranslateServiceService } from '../../service/translate-service.service';
@Component({
 selector: 'app-news-page',
 templateUrl: './news-page.component.html',
 styleUrl: './news-page.component.css',
})
export class NewsPageComponent implements OnInit {
 bookItems: Array<any> = [];
 itemsPerPage = 15;
 currentPage = 1;
 imageUrl = environment.imgUrl;
 lang = 'mn';

 constructor(
  private newsService: NewsService,
  private language: TranslateServiceService
 ) {}

 ngOnInit() {
  this.language.loadLang.subscribe((lang: any) => {
   this.lang = lang;
   this.fetchAllNews();
  });
 }

 get paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.bookItems.slice(startIndex, endIndex);
 }

 get totalPages() {
  return Math.ceil(this.bookItems.length / this.itemsPerPage);
 }

 changePage(page: number) {
  this.currentPage = page;
 }

 nextPage() {
  if (this.currentPage < this.totalPages) {
   this.currentPage++;
  }
 }

 previousPage() {
  if (this.currentPage > 1) {
   this.currentPage--;
  }
 }

 fetchAllNews() {
  this.newsService.getAllNews(this.lang).subscribe(
   (data: any) => {
    this.bookItems = data;
    console.log(this.bookItems);
   },
   (error) => {
    console.error('Error fetching books:', error);
   }
  );
 }
}
