import { Component, OnInit, HostListener } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css'],
})
export class GalleryPageComponent implements OnInit {
  galleryImages: any[] = [];
  imageUrl = environment.imgUrl;
  itemsPerPage = 15;
  currentPage = 1;
  selectedImage: any = null; // Track the selected image for fullscreen
  isModalOpen = false; // State to track whether the modal is open

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.fetchGalleryData();
  }

  // Fetch data from the API
  fetchGalleryData(lang: string = 'mn'): void {
    this.galleryService.menulist(lang).subscribe({
      next: (data) => {
        console.log('API Response:', data);

        // Map API response to galleryImages
        this.galleryImages = data.map((item: any) => ({
          src: item.picurl, // Use `picurl` for image source
          alt: item.title || 'Зурагны тайлбар', // Use `title` or provide a fallback
        }));

        console.log('Processed galleryImages:', this.galleryImages);
      },
      error: (err) => {
        console.error('Error fetching gallery data:', err);
      },
    });
  }

  // Open the modal with the selected image
  showImage(image: any): void {
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  // Close the fullscreen modal
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
  }

  // Navigate to the next image in the modal
  nextImage(): void {
    const currentIndex = this.galleryImages.findIndex(
      (image) => image.src === this.selectedImage.src,
    );
    const nextIndex = (currentIndex + 1) % this.galleryImages.length;
    this.selectedImage = this.galleryImages[nextIndex];
  }

  // Navigate to the previous image in the modal
  previousImage(): void {
    const currentIndex = this.galleryImages.findIndex(
      (image) => image.src === this.selectedImage.src,
    );
    const prevIndex =
      (currentIndex - 1 + this.galleryImages.length) %
      this.galleryImages.length;
    this.selectedImage = this.galleryImages[prevIndex];
  }

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.galleryImages.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.galleryImages.length / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Use HostListener to capture the keydown event
  @HostListener('document:keydown', ['$event'])
  onArrowPress(event: KeyboardEvent) {
    if (this.isModalOpen) {
      // Only handle arrow keys when modal is open
      if (event.key === 'ArrowRight') {
        console.log('Right arrow pressed');
        this.nextImage();
      }
      if (event.key === 'ArrowLeft') {
        console.log('Left arrow pressed');
        this.previousImage();
      }

      // Close the modal when ESC is pressed
      if (event.key === 'Escape') {
        console.log('Escape key pressed');
        this.closeModal(); // Close the modal
      }
    }
  }
}
