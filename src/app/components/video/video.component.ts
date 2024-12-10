import { Component, OnInit, HostListener } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  videoHeight: number | undefined;
  videoWidth: number | undefined;
  videoData: any[] = []; // Data fetched from service
  screenWidth: number | undefined;
  screenHeight: number | undefined;
  activeVideo: any = {}; // Currently active video
  isMobile: boolean;
  imgUrl = environment.imgUrl;

  constructor(private videoService: VideoService) {
    this.isMobile = window.innerWidth < 768; // Check if the device is mobile
  }

  ngOnInit() {
    this.updateVideoDimensions(); // Set initial dimensions
    this.fetchVideoData();
  }

  fetchVideoData() {
    this.videoService.getAllVideo().subscribe(
      (data: any[]) => {
        this.videoData = data.map((video) => ({
          id: video.id,
          title: video.title,
          url: video.url,
          thumbnailUrl: video.picurl, // Use `picurl` for the thumbnail
          createdAt: video.created_at,
        }));

        // Set the last video as the default active video
        this.activeVideo = this.videoData[this.videoData.length - 1];
      },
      (error) => {
        console.error('Error fetching video data:', error);
      },
    );
  }

  setActiveVideo(video: any) {
    this.activeVideo = video; // Update the active video
  }

  getVideoId(url: string): string {
    const regex =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.isMobile = event.target.innerWidth < 768;
    this.updateVideoDimensions(); // Recalculate dimensions
  }

  updateVideoDimensions() {
    const screenWidth = window.innerWidth;

    if (this.isMobile) {
      this.videoWidth = screenWidth * 0.9; // Use 90% of the screen width on mobile
    } else {
      this.videoWidth = screenWidth > 1024 ? 900 : screenWidth * 0.7; // Use 70% of width for larger screens
    }

    this.videoHeight = (this.videoWidth * 9) / 16; // Maintain the 16:9 aspect ratio
    this.screenWidth = this.videoWidth;
    this.screenHeight = this.videoHeight;
  }
}
