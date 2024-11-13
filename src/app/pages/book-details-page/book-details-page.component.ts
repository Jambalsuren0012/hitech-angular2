import { Component, OnInit } from '@angular/core';
import { BookdetailsService } from '../../service/bookdetails.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css'],
})
export class BookDetailsPageComponent implements OnInit {
  bookdetailslist: any = null;

  constructor(
    private bookdetailsService: BookdetailsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Get the bookid from route parameters
    this.route.paramMap.subscribe((params) => {
      const bookid = params.get('bookid');
      if (bookid) {
        // Fetch book details by id
        const details = this.bookdetailsService.getBookDetails(bookid);
        this.bookdetailslist = details.length > 0 ? details[0] : null;
      }
    });
  }
}
