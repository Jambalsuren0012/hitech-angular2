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
    {
      coords: [47.9221, 106.9155],
      id: '1',
      title: 'Ulaanbaatar',
      description: 'Capital of Mongolia',
    },
    {
      coords: [47.9795, 91.6348],
      id: '2',
      title: 'Khovd',
      description: 'City in western Mongolia',
    },
    {
      coords: [46.1772, 100.7119],
      id: '3',
      title: 'Bayankhongor',
      description: 'City in central Mongolia',
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
    {
      coords: [47.2327, 98.5547],
      id: '1',
      title: 'Ulaanbaatar',
      description: 'Capital of Mongolia',
    },
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

    this.coordinates.forEach(({ coords, id, title, description }) => {
      const balloonContent = `
        <div>
          <strong>${title}</strong><br>
          <p>${description}</p>
          <a href="#" id="link-${id}"> <strong>Судалгаа үзэх</strong></a>
        </div>
      `;

      const myPlacemark = new (window as any).ymaps.Placemark(coords, {
        balloonContent,
      });

      // Add event listener to navigate when the title is clicked
      myPlacemark.events.add('balloonopen', () => {
        document
          .getElementById(`link-${id}`)
          ?.addEventListener('click', (event) => {
            event.preventDefault();
            this.router.navigate(['map', id]);
          });
      });

      myMap.geoObjects.add(myPlacemark);
    });
  }
}
