import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

// Define the TimelineItem interface
export interface TimelineItem {
  id: number;
  year: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements AfterViewInit {
  // Example timeline data
  timelines: TimelineItem[] = [
    {
      id: 1,
      year: 2022,
      title: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      year: 2023,
      title: 'Dolor Sit Amet',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      year: 2022,
      title: 'Consectetur Adipiscing',
      description:
        'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
      id: 4,
      year: 2024,
      title: 'Vitae Elementum',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    },
  ];

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    // GSAP animation for timeline items (optional)
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 },
    );
  }
}
