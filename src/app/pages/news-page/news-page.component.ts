import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NewsService } from '../../service/news.service';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css',
})
export class NewsPageComponent {
  bookItems: Array<any> = [];
  itemsPerPage = 15;
  currentPage = 1;
  imageUrl = environment.imgUrl;

  constructor(private newsService: NewsService) {}

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
    this.newsService.getAllNews().subscribe(
      (data: any) => {
        this.bookItems = data;
        console.log(this.bookItems);
      },
      (error) => {
        console.error('Error fetching books:', error);
      },
    );
  }

  ngOnInit() {
    this.fetchAllNews();
  }
}
