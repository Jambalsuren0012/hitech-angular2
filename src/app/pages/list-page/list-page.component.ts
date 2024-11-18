import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent {
  categories = [
    { id: '1', name: 'Fiction' },
    { id: '2', name: 'Non-Fiction' },
    { id: '3', name: 'Science' },
    { id: '4', name: 'History' },
    { id: '5', name: 'Biography' },
    { id: '5', name: 'Biography' },
    { id: '5', name: 'Biography' },
    { id: '5', name: 'Чулуун зэвсгийн судалгааны салбар Судлаачид' },
  ];
  items = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m6WeuZ4-B7rXmWyimaFdN3UlPrmSrpQBhA&s',
    title: `Card Title ${i + 1}`,
    description: `This is the description for card This is the description for cardThis is the description for cardThis is the description for cardThis is the description for cardThis is the description for cardThis is the description for card ${i + 1}.`,
  }));

  itemsPerPage = 15;
  currentPage = 1;

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
}
