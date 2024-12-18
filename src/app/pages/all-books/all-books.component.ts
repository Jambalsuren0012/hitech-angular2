import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { environment } from '../../environments/environment';
import { TranslateServiceService } from '../../service/translate-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
 selector: 'app-all-books',
 templateUrl: './all-books.component.html',
 styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
 bookData: Array<any> = [];
 itemsPerPage = 15;
 currentPage = 1;
 imageUrl = environment.imgUrl;
 lang = 'mn';
 menuid: any;

 constructor(
  private booksService: BooksService,
  private language: TranslateServiceService,
  private route: ActivatedRoute
 ) {}

 get paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.bookData.slice(startIndex, endIndex);
 }

 get totalPages() {
  return Math.ceil(this.bookData.length / this.itemsPerPage);
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

 fetchAllBook() {
  var data = null;
  if (this.menuid) {
   data = { lang: this.lang, menuid: this.menuid ?? null };
  } else {
   data = { lang: this.lang };
  }
  this.booksService.getAllBook(data).subscribe(
   (data: any) => {
    this.bookData = data;
   },
   (error) => {
    console.error('Error fetching books:', error);
   }
  );
 }

 ngOnInit() {
  this.language.loadLang.subscribe((lang: any) => {
   this.lang = lang;
  });

  this.route.paramMap.subscribe((params) => {
   this.menuid = params.get('id'); // Get the `id` from the route
   this.language.loadLang.subscribe((lang: any) => {
    this.lang = lang;
   });
   this.fetchAllBook();
  });
 }
 trackById(index: number, data: any): string {
  return data.id;
 }
}
