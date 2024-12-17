import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  items: Array<any> = [];
  itemsPerPage = 15;
  currentPage = 1;
  imageUrl = environment.imgUrl;

  constructor(private booksService: BooksService) {}

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
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
    this.booksService.getAllBooks().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      },
    );
  }

  ngOnInit() {
    this.fetchAllBook();
  }
}
