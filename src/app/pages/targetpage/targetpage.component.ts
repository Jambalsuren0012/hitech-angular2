import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { CoordinatesService } from '../../service/coordinates.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-targetpage',
  templateUrl: './targetpage.component.html',
  styleUrls: ['./targetpage.component.css'],
})
export class TargetpageComponent implements OnInit {
  mapid: string | null = null;
  coordinatDetails: any = null;
  imgUrl = environment.imgUrl;
  constructor(
    private coordinatesService: CoordinatesService,
    private route: ActivatedRoute,
  ) {}
  fetchcoordinatDetails(coordinateid: string): void {
    this.coordinatesService.coordinatlist().subscribe(
      (data) => {
        this.coordinatDetails =
          data.find((item: any) => item.id === coordinateid) || null;
      },
      (error) => {
        console.error('Error fetching news details:', error);
      },
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.mapid = params.get('id'); // Match the route parameter key
      if (this.mapid) {
        this.fetchcoordinatDetails(this.mapid);
      }
    });
  }
}
