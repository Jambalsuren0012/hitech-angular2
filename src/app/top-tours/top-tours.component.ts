import { Component } from '@angular/core';

@Component({
  selector: 'app-top-tours',
  templateUrl: './top-tours.component.html',
  styleUrl: './top-tours.component.css',
})
export class TopToursComponent {
  toursData = [
    {
      title:
        'Mount Khuiten Express Climbing Tour: Mongolias Ultimate Peak Expedition',
      date: '"8 Nights and 9 Days"',
      imageUrl:
        'https://mongoliatravel.net/storage/177/conversions/dsc_0868-thumb.jpg',
      toursCount: '$ 2200',
      type: 'Rock climbing Trips',
    },
    {
      title: 'Zorgol Mountain (1660m) Adventure Tour!',
      date: '1 night and 2 days',
      imageUrl:
        'https://mongoliatravel.net/storage/176/conversions/dsc_3144-thumb.jpg',
      toursCount: '$ 160',
      type: 'Experience Tour',
    },
    {
      title: 'Rock Climbing in Mongolia? Absolutely!',
      date: '4 nights and 5 days',
      imageUrl:
        'https://mongoliatravel.net/storage/175/conversions/max_0108-thumb.jpg',
      toursCount: '$ 620',
      type: 'Mountaineering Tours',
    },
    {
      title:
        'Enjoy Camel Rides in the Sand Dunes & Horseback Riding in the Grasslands! 5-Day Stay in a Ger',
      date: '4 nights and 5 days',
      imageUrl:
        'https://mongoliatravel.net/storage/174/conversions/dsc_0048-thumb.jpg',
      toursCount: '$ 640',
      type: 'Experience Tour',
    },
    {
      title:
        'The UNESCO World Heritage Site of the Uvs-Nuur Basin and Mountaineering Tour',
      date: '"8 Nights and 9 Days"',
      imageUrl:
        'https://mongoliatravel.net/storage/173/conversions/dsc_0928-thumb.jpg',
      toursCount: '$ 2550',
      type: 'Mountaineering Tours',
    },
    {
      title: 'Explore the Mysteries of Khuvsgul! Khuvsgul Lake Adventure Tour',
      date: '6 night and 7 days',
      imageUrl:
        'https://mongoliatravel.net/storage/172/conversions/_dsc2904-min-thumb.jpg',
      toursCount: '$ 1670',
      type: 'Experience Tour',
    },
    {
      title:
        'budget-friendly plan for visiting the World Heritage site of Karakorum.',
      date: '4 nights and 5 days',
      imageUrl:
        'https://mongoliatravel.net/storage/171/conversions/030220_4-thumb.jpg',
      toursCount: '$ 620',
      type: 'Mountaineering Tours',
    },
    {
      title: 'Climbing Tour of the Highest Peak in Mongolia: Khuiten Peak',
      date: '4 nights and 5 days',
      imageUrl:
        'https://mongoliatravel.net/storage/170/conversions/_mg_1964-thumb.jpg',
      toursCount: '$ 640',
      type: 'Experience Tour',
    },
  ];
}
