import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { formatDistanceToNow } from 'date-fns';
import { mn } from 'date-fns/locale';
import { faClock } from '@fortawesome/free-regular-svg-icons';
interface NewsItem {
  id: string;
  created_at: string | number | Date;
  readcount: number;
  picurl: string;
  title: string;
  description: string;
  // Add any other fields your news data may contain
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  newsid: string | null = null;
  newsDetails: any = null;
  newsCards: NewsItem[] = []; // Specify the type of the array
  imgUrl = environment.imgUrl;
  faClock = faClock;
  recentNews: NewsItem[] = [];
  topReadNews: NewsItem[] = [];
  lastNews: NewsItem[] = [];
  isModalOpen = false;
  selectedVideoUrl: string | null = null;

  openModal(videoUrl: string | null): void {
    if (videoUrl) {
      this.selectedVideoUrl = videoUrl;
      this.isModalOpen = true;
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedVideoUrl = null;
  }

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsDetailsService.getAllNews().subscribe(
      (data: NewsItem[]) => {
        // Sort by created_at (latest first) and pick the most recent one
        this.newsCards = data.sort(
          (a: NewsItem, b: NewsItem) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );

        // For showing last 1-3 most recent news in the main content area
        this.recentNews = this.newsCards.slice(0, 3);
        this.lastNews = this.newsCards.slice(0, 1); // Only the most recent news
        // Takes the 3 most recent

        // For showing top 5 based on readcount
        this.topReadNews = data
          .sort((a: NewsItem, b: NewsItem) => b.readcount - a.readcount)
          .slice(0, 5); // Takes top 5 based on readcount
      },
      (error) => {
        console.error('Error fetching news:', error);
      },
    );
  }
  constructor(
    private newsDetailsService: NewsService,
    private route: ActivatedRoute,
  ) {}
  trackById(index: number, news: NewsItem): string {
    // Specify type for 'news'
    return news.id;
  }

  getTimeAgo(dateString: string): string {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: mn,
    });
  }
  Videodata = [
    {
      url: 'https://www.youtube.com/watch?v=TgaqiDtLjVc',
      title: 'My Custom Video Title',
      date: 'Nov 25, 2024',
      thumbnailUrl: '',
    },
  ];

  // Method to extract video ID from URL
  getVideoId(url: string | null): string {
    if (!url) {
      return ''; // Return an empty string or a default video ID
    }
    const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }
}
