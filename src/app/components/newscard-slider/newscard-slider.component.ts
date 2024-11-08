import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-newscard-slider',
  templateUrl: './newscard-slider.component.html',
  styleUrl: './newscard-slider.component.css',
})
export class NewscardSliderComponent {
  newsCardsData: Array<{
    id: string; // Change to string (or number if preferred)
    title: string;
    postDate: string;
    description: string;
    link: string; // Change from any to string
    bookcategoryid: string;
    imgUrl: string; // Make sure this has a type (string or another type if needed)
    compressedUrl?: string; // Optional
  }> = [
    {
      id: '1',
      title: 'Amazing First Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '2',
      title: 'Amazing Second Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '3',
      title: 'Amazing Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '4',
      title: 'Amazing Forth Title that is Quite Long',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet! orem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '5',
      title: 'Amazing Fifth Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio…',
      imgUrl:
        'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
    {
      id: '6',
      title: 'Amazing 6th Title',
      postDate: 'Jan 29, 2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.',
      imgUrl:
        'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      link: '#',
      bookcategoryid: '',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1, // For mobile devices
      },
      400: {
        items: 1, // Slightly larger mobile devices
      },
      600: {
        items: 1, // Tablets or small devices
      },
      900: {
        items: 2, // Desktops and larger tablets
      },
      1200: {
        items: 3, // Wider screens or large desktops
      },
      1400: {
        items: 4, // Wider screens or large desktops
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
  };
  ngOnInit(): void {
    this.compressImages();
  }

  async compressImages() {
    if (typeof window === 'undefined') {
      // If we're on the server, do nothing
      return;
    }

    const maxWidth = 800;
    const maxHeight = 600;

    for (const image of this.newsCardsData) {
      try {
        const compressedUrl = await this.resizeImage(
          image.imgUrl,
          maxWidth,
          maxHeight,
        );
        image.compressedUrl = compressedUrl;
      } catch (error) {
        console.error(`Error compressing image ${image.imgUrl}:`, error);
        image.compressedUrl = image.imgUrl; // Fallback to original image
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
      img.crossOrigin = 'anonymous'; // Enable CORS
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
