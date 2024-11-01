import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css'], // Fixed the property name from styleUrl to styleUrls
})
export class HomeHeroComponent implements OnInit {
  img: Array<{ url: string; compressedUrl?: string }> = [
    { url: '/assets/img/home-slid/DD-40.jpg' },
    { url: '/assets/img/home-slid/Image0098.jpg' },
    { url: '/assets/img/home-slid/Антро-2.jpg' },
  ];

  customOptions = {
    loop: true,
    margin: 10,
    items: 1,
    center: true,
    stagePadding: 100,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 2500,
    animateIn: 'animate__animated animate__fadeIn',
    animateOut: 'animate__animated animate__fadeOut',
    responsive: {
      0: { items: 1, stagePadding: 50 },
      768: { items: 1, stagePadding: 100 },
    },
  };

  ngOnInit(): void {
    this.compressImages();
  }

  async compressImages() {
    const maxWidth = 800; // Define your max width
    const maxHeight = 600; // Define your max height

    for (const image of this.img) {
      try {
        const compressedUrl = await this.resizeImage(
          image.url,
          maxWidth,
          maxHeight,
        );
        image.compressedUrl = compressedUrl;
      } catch (error) {
        console.error(`Error compressing image ${image.url}:`, error);
        // Optionally, you can set a fallback or keep the original URL
        image.compressedUrl = image.url; // Keep original in case of error
      }
    }
  }

  resizeImage(
    url: string,
    maxWidth: number,
    maxHeight: number,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }

        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedUrl = canvas.toDataURL('image/jpeg', 0.8); // JPEG with 80% quality
        resolve(compressedUrl);
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
    });
  }
}
