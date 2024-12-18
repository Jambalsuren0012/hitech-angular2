import { Component, OnInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CoordinatesService } from '../../service/coordinates.service'; // Import the service
import { TranslateServiceService } from '../../service/translate-service.service';

@Component({
 selector: 'app-map2',
 templateUrl: './map2.component.html',
 styleUrls: ['./map2.component.css'],
})
export class Map2Component implements OnInit {
 coordinates: any[] = []; // Dynamic coordinates array
 lang = 'mn';
 private map: any;

 constructor(
  @Inject(PLATFORM_ID) private platformId: Object,
  private router: Router,
  private renderer: Renderer2,
  private language: TranslateServiceService,
  private coordinatesService: CoordinatesService // Inject the service
 ) {}

 async ngOnInit(): Promise<void> {
  this.language.loadLang.subscribe((lang: any) => {
   this.lang = lang;
   if (isPlatformBrowser(this.platformId)) {
    // Fetch coordinates dynamically
    this.coordinatesService.coordinatlist(this.lang).subscribe({
     next: (data) => {
      this.coordinates = data;
      this.loadLeaflet(); // Initialize the map after coordinates are fetched
     },
     error: (err) => console.error('Error fetching coordinates:', err),
    });
   }
  });
 }

 private async loadLeaflet(): Promise<void> {
  const L = await import('leaflet');
  this.initMap(L);
 }

 private initMap(L: any): void {
  this.map = L.map('map').setView([47.3314, 104.4996], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

  const customIcon = L.icon({
   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34],
   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
   shadowSize: [41, 41],
   className: 'custom-icon',
  });

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

   const marker = L.marker(location.coords as L.LatLngExpression, {
    icon: customIcon,
   })
    .addTo(this.map)
    .bindPopup(popupContent);

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

 navigateToTargetPage(mapid: string): void {
  this.router.navigate([`/map/${mapid}`]);
 }
}
