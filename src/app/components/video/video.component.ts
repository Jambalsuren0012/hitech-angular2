import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  videoHeight: number | undefined;
  videoWidth: number | undefined;
  Videodata = [
    {
      url: 'https://www.youtube.com/watch?v=l-dsOwXAFrU',
      title: 'My Custom Video Title 1',
      created_at: 'Nov 25, 2024',
      thumbnailUrl: 'https://img.youtube.com/vi/l-dsOwXAFrU/0.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=mk4iH6FFWyE',
      title: 'My Custom Video Title 2',
      created_at: 'Nov 25, 2024',
      thumbnailUrl: 'https://img.youtube.com/vi/mk4iH6FFWyE/0.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=0fY0rVcX_A8',
      title: 'My Custom Video Title 3',
      created_at: 'Nov 25, 2024',
      thumbnailUrl: 'https://img.youtube.com/vi/0fY0rVcX_A8/0.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=asgAqJTvNuQ',
      title: 'My Custom Video Title 4',
      created_at: 'Nov 25, 2024',
      thumbnailUrl: 'https://img.youtube.com/vi/asgAqJTvNuQ/0.jpg',
    },
    {
      url: 'https://www.youtube.com/watch?v=asgAqJTvNuQ',
      title: 'My Custom Video Title 5',
      created_at: 'Nov 25, 2024',
      thumbnailUrl: 'https://img.youtube.com/vi/asgAqJTvNuQ/0.jpg',
    },
  ];

  activeVideo: any = {}; // Store the active video details

  ngOnInit() {
    // Set the last video as the default active video
    this.activeVideo = this.Videodata[this.Videodata.length - 1];
    this.updateVideoDimensions(); // Set initial dimensions
  }

  setActiveVideo(video: any) {
    this.activeVideo = video; // Update the active video to the clicked one
  }

  getVideoId(url: string): string {
    const regex =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }

  isMobile: boolean;

  constructor() {
    this.isMobile = window.innerWidth < 768; // Default to mobile check
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.isMobile = event.target.innerWidth < 768;
    this.updateVideoDimensions(); // Recalculate dimensions
  }

  updateVideoDimensions() {
    const screenWidth = window.innerWidth;
    this.videoWidth = screenWidth > 1024 ? 900 : screenWidth * 0.9; // 90% width for smaller screens
    this.videoHeight = (this.videoWidth * 9) / 16; // Maintain 16:9 aspect ratio
  }
}
