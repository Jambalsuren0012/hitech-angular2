import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  // Define coordinates as a class-level property so it can be accessed in the template
  coordinates = [
    { coords: [47.9221, 106.9155], url: '/target', title: 'Ulaanbaatar' },
    { coords: [47.9795, 91.6348], url: '/khovd', title: 'Khovd' },
    { coords: [46.1772, 100.7119], url: '/baynhongor', title: 'Bayankhongor' },
    { coords: [43.5, 104.2861], url: '/umnugovi', title: 'Umnugovi' },
    { coords: [48.2388, 96.0703], url: '/zavhan', title: 'Zavkhan' },
  ];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    if (!(window as any).ymaps) {
      console.error('Yandex Maps API is not loaded');
      return;
    }

    const myMap = new (window as any).ymaps.Map(
      this.mapContainer.nativeElement,
      {
        center: [47.2124, 106.4154],
        zoom: 4,
      },
    );

    // Use the class-level `coordinates` property in the map initialization
    this.coordinates.forEach(({ coords, url }) => {
      const myPlacemark = new (window as any).ymaps.Placemark(coords, {
        balloonContent: `Location: ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`,
      });

      myPlacemark.events.add('click', () => {
        this.router.navigate([url]);
      });

      myMap.geoObjects.add(myPlacemark);
    });
  }
}
