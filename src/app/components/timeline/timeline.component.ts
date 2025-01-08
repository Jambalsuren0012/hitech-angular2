import { TimlineService } from '../../service/timline.service';
import {
  Component,
  AfterViewInit,
  HostListener,
  OnInit,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { environment } from '../../environments/environment';

// Define the TimelineItem interface
export interface TimelineItem {
  id: number;
  year: number;
  title: string;
  picurl: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit, AfterViewInit {
  timelineData: TimelineItem[] = []; // Store fetched timeline data
  imageUrl = environment.imgUrl; // Define the image URL

  constructor(
    private timelineService: TimlineService,
    private elRef: ElementRef,
  ) {}

  ngOnInit(): void {
    this.fetchTimelineData(); // Fetch data on component initialization
  }

  fetchTimelineData(): void {
    const payload = {
      /* Provide necessary data here */
    };

    this.timelineService.getAllTimelineData(payload).subscribe({
      next: (data: TimelineItem[]) => {
        console.log('Fetched Timeline Data:', data); // Check data in the console
        this.timelineData = data.reverse(); // Reverse the array to show the last year first
      },
      error: (err: any) => {
        console.error('Error fetching timeline data:', err);
      },
    });
  }
  ngAfterViewInit(): void {
    this.setInitialBackgroundImage();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const items = this.elRef.nativeElement.querySelectorAll('.timeline-item');
    const timeline = this.elRef.nativeElement.querySelector('#timeline-1');
    const viewportHeight = window.innerHeight;

    // Increase the scroll distance by changing the activation threshold.
    // Higher percentage means more scroll distance required.
    const activationThreshold = viewportHeight * 0.8; // Activate when 90% down the viewport

    items.forEach((item: HTMLElement, index: number) => {
      const rect = item.getBoundingClientRect();
      const itemMiddle = rect.top + rect.height / 2;
      const isLastItem = index === items.length - 1;

      if (isLastItem && itemMiddle <= activationThreshold) {
        this.setActiveItem(timeline, item, items, true);
      } else if (itemMiddle >= 0 && itemMiddle <= viewportHeight) {
        if (itemMiddle <= activationThreshold) {
          this.setActiveItem(timeline, item, items);
        }
      }
    });
  }

  setInitialBackgroundImage(): void {
    const timeline = this.elRef.nativeElement.querySelector('#timeline-1');
    const firstItem = this.elRef.nativeElement.querySelector('.timeline-item');
    if (firstItem) {
      const imgUrl = firstItem
        .querySelector('.timeline__img')
        .getAttribute('src');
      timeline.style.backgroundImage = `url(${imgUrl})`;
      firstItem.classList.add('timeline-item--active');
    }
  }

  setActiveItem(
    timeline: HTMLElement,
    item: HTMLElement,
    items: NodeListOf<HTMLElement>,
    isLast: boolean = false,
  ): void {
    items.forEach((i) => i.classList.remove('timeline-item--active'));
    item.classList.add('timeline-item--active');
    const imgUrl = item.querySelector('.timeline__img')?.getAttribute('src');
    timeline.style.backgroundImage = `url(${imgUrl})`;

    if (isLast) {
      items[items.length - 1].classList.add('timeline-item--active');
    }
  }
}
