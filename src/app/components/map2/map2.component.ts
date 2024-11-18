import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css'],
})
export class Map2Component implements OnInit {
  coordinates = [
    {
      coords: [44.42533, 101.10134],
      id: '1',
      title: 'Баянхонгор, Баянлиг, ',
      description: ' Цагаан агуй ,Ил суурин агуй',
    },
    {
      coords: [47.9795, 91.6348],
      id: '2',
      title: 'Завхан Эрдэнэхайрхан, Дөрвөлжин',
      description: 'Их Хайрхан уул',
    },
    {
      coords: [48.3163, 101.2529],
      id: '3',
      title: 'Архангай Эрдэнэмандал ',
      description: 'Өлзийт дэнж',
    },
    {
      coords: [43.5, 104.2861],
      id: '4',
      title: 'Umnugovi',
      description: 'Province in southern Mongolia',
    },
    {
      coords: [48.2388, 96.0703],
      id: '5',
      title: 'Zavkhan',
      description: 'Province in northwestern Mongolia',
    },
  ];

  private map: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private renderer: Renderer2, // Inject Renderer2 to handle DOM manipulation
  ) {}

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Leaflet only in the browser
      const L = await import('leaflet');
      this.initMap(L);
    }
  }

  private initMap(L: any): void {
    // Initialize the map and set its view
    this.map = L.map('map').setView([47.9221, 106.9155], 6); // Center on Ulaanbaatar

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(
      this.map,
    );

    // Create a custom icon with a border
    const customIcon = L.icon({
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // default icon or custom image
      iconSize: [25, 41], // Size of the icon
      iconAnchor: [12, 41], // Anchor point of the icon
      popupAnchor: [1, -34], // Popup position relative to the icon
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Shadow image (optional)
      shadowSize: [41, 41], // Shadow size
      className: 'custom-icon', // Custom class for additional styling
    });

    // Add markers with the custom icon and custom popup HTML content
    this.coordinates.forEach((location) => {
      const popupContent = `
      <div>
          <strong>${location.title}</strong><br>
          <p>${location.description}</p>
          <a href="#" id="link-${location.id}">
            <strong>Судалгаа үзэх</strong>
          </a>
        </div>
      `;

      // Add marker with custom content
      const marker = L.marker(location.coords as L.LatLngExpression, {
        icon: customIcon,
      })
        .addTo(this.map)
        .bindPopup(popupContent);

      // After marker is added, use Renderer2 to attach the click event
      marker.on('popupopen', () => {
        const linkElement = document.getElementById(`link-${location.id}`);
        if (linkElement) {
          this.renderer.listen(linkElement, 'click', (event) => {
            event.preventDefault();
            this.navigateToTargetPage(location.id);
          });
        }
      });
    });
  }

  // Method to navigate to the TargetpageComponent
  navigateToTargetPage(mapid: string): void {
    this.router.navigate([`/map/${mapid}`]);
  }
}
