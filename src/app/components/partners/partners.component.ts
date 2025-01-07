import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PartnersService } from '../../service/partners.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'], // Fixed 'styleUrl' typo
})
export class PartnersComponent implements OnInit {
  partners: Array<{
    picurl: any;
    link: string;
  }> = [];
  imageUrl = environment.imgUrl;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: { items: 2 },
      400: { items: 2 },
      600: { items: 4 },
      900: { items: 4 },
      1200: { items: 6 },
      1400: { items: 8 },
    },
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
  };

  constructor(private partnerService: PartnersService) {}

  ngOnInit() {
    // Call the method to fetch data when the component is initialized
    this.fetchPartnerData();
  }

  fetchPartnerData() {
    this.partnerService.partnerlist().subscribe({
      next: (data: any) => {
        console.log('Fetched Slider Data:', data); // Check data in the console
        this.partners = data;
      },
      error: (err: any) => {
        console.error('Error fetching slider data:', err);
      },
    });
  }
}
