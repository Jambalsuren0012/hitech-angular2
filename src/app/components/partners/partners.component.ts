import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css',
})
export class PartnersComponent {
  partners = [
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://cdn.greensoft.mn/uploads/site/1040/site_config/logo/fc04b968cd68ab6ad9fba961ca419b75bfe925ff.jpg',
      url: 'https://moe.gov.mn/',
    },
    {
      titles: 'Засаг Даргын Тамгын газар',
      description: '',
      imgurl:
        'https://zdtg.ulaanbaatar.mn/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fhome%2FLogoT.24e84c277900474a2278e13060a70705.png&w=96&q=75',
      url: 'https://zdtg.ulaanbaatar.mn/',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://cdn.greensoft.mn/uploads/site/1040/site_config/logo/fc04b968cd68ab6ad9fba961ca419b75bfe925ff.jpg',
      url: 'https://www.mongolbank.mn/ ',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://mas.ac.mn/public/uploads/c1146401-0ade-41e1-abd0-df12a3cd3da5/f91f0142-104e-46be-ade6-64adc52cbedd.jpg',
      url: 'https://mas.ac.mn/',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl: 'https://www.unesco.mn/templates/images/logo.png',
      url: 'https://www.unesco.mn/',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://cdn.greensoft.mn/uploads/site/1040/site_config/logo/fc04b968cd68ab6ad9fba961ca419b75bfe925ff.jpg',
      url: 'https://moe.gov.mn/',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://cdn.greensoft.mn/uploads/site/1040/site_config/logo/fc04b968cd68ab6ad9fba961ca419b75bfe925ff.jpg',
      url: 'https://moe.gov.mn/',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://cdn.greensoft.mn/uploads/site/1040/site_config/logo/fc04b968cd68ab6ad9fba961ca419b75bfe925ff.jpg',
      url: 'https://moe.gov.mn/',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://cdn.greensoft.mn/uploads/site/1040/site_config/logo/fc04b968cd68ab6ad9fba961ca419b75bfe925ff.jpg',
      url: 'https://moe.gov.mn/',
    },
    {
      titles: 'Боловсролын яам',
      description: '',
      imgurl:
        'https://cdn.greensoft.mn/uploads/site/1040/site_config/logo/fc04b968cd68ab6ad9fba961ca419b75bfe925ff.jpg',
      url: 'https://moe.gov.mn/',
    },
  ];
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
}
