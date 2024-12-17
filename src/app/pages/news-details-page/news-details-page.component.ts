import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { NewsService } from '../../service/news.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';

@Component({
  selector: 'app-news-details-page',
  templateUrl: './news-details-page.component.html',
  styleUrls: ['./news-details-page.component.css'],
})
export class NewsDetailsPageComponent implements OnInit, AfterViewInit {
  newsDetails: any = null;
  imageUrl = environment.imgUrl;
  images: any = null;
  faClock = faClock;
  currentPageUrl: string = encodeURIComponent(window.location.href);

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const newsid = params.get('id'); // Get the `id` from the route
      if (newsid) {
        this.fetchNewsDetails(newsid);
      }
    });
  }

  ngAfterViewInit(): void {
    this.styleInnerImages();
  }

  fetchNewsDetails(newsid: string): void {
    this.newsService.getAllNews().subscribe(
      (data) => {
        this.newsDetails = data.find((item: any) => item.id === newsid) || null;
      },
      (error) => {
        console.error('Error fetching news details:', error);
      },
    );
  }

  styleInnerImages(): void {
    const images = this.el.nativeElement.querySelectorAll('.news-content img');
    images.forEach((img: HTMLElement) => {
      this.renderer.setStyle(img, 'margin-top', '20px');
      this.renderer.setStyle(img, 'display', 'block');
    });
  }

  getFormattedDate(dateString: string): string {
    return format(new Date(dateString), 'yyyy-MM-dd');
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
      1200: { items: 1 },
    },
  };
}
