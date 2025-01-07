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
import { CoordinatesService } from '../../service/coordinates.service';

@Component({
  selector: 'app-targetpage',
  templateUrl: './targetpage.component.html',
  styleUrls: ['./targetpage.component.css'],
})
export class TargetpageComponent implements OnInit {
  mapid: string | null = null;
  coordinatDetails: any = null;
  imageUrl = environment.imgUrl;
  faClock = faClock;
  currentPageUrl: string = encodeURIComponent(window.location.href);
  constructor(
    private coordinatesService: CoordinatesService,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}
  fetchcoordinatDetails(coordinateid: string): void {
    this.coordinatesService.coordinatlist().subscribe(
      (data) => {
        this.coordinatDetails =
          data.find((item: any) => item.id === coordinateid) || null;
        setTimeout(() => {
          this.styleInnerImages();
        }, 100);
        console.log('coordinatDetails', this.coordinatDetails);
      },
      (error) => {
        console.error('Error fetching news details:', error);
      },
    );
  }
  styleInnerImages(): void {
    const images = this.el.nativeElement.querySelectorAll(
      '.coordinates-content img',
    );
    images.forEach((img: HTMLElement) => {
      this.renderer.setStyle(img, 'margin-top', '25px');
      this.renderer.setStyle(img, 'display', 'block');
    });
  }
  getFormattedDate(dateString: string): string {
    return format(new Date(dateString), 'yyyy-MM-dd');
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.mapid = params.get('id'); // Match the route parameter key
      if (this.mapid) {
        this.fetchcoordinatDetails(this.mapid);
      }
    });
  }
}
