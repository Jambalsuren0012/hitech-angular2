import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentSearchService } from '../../service/content-search.service';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css'],
})
export class SearchresultComponent implements OnInit {
  contents: any[] = [];
  filteredContents: any[] = [];
  term: string = '';
  imgUrl = environment.imgUrl;

  constructor(
    private contentSearchService: ContentSearchService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Fetch all products on component load
    this.contentSearchService.getAllContentSearch().subscribe((data) => {
      this.contents = data;
      console.log('Fetched Contents:', this.contents); // Log the fetched contents to verify

      // Listen for route changes to update search term
      this.route.params.subscribe((params) => {
        this.term = params['term'] || '';
        console.log('Search Term:', this.term); // Log the search term to verify

        this.filterContents();
      });
    });
  }

  filterContents() {
    if (this.term) {
      // Log the filtering process
      console.log('Filtering contents with term:', this.term);

      this.filteredContents = this.contents.filter((content) =>
        content.title?.toLowerCase().includes(this.term.toLowerCase()),
      );
    } else {
      this.filteredContents = this.contents;
    }

    // Log the filtered contents to the console
    console.log('Filtered Contents:', this.filteredContents);
  }
}
