import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoordinatesService } from '../../service/coordinates.service';

@Component({
  selector: 'app-targetpage',
  templateUrl: './targetpage.component.html',
  styleUrls: ['./targetpage.component.css'],
})
export class TargetpageComponent implements OnInit {
  mapid: string | null = null;
  coordinatDetails: any = null;

  constructor(
    private coordinatesService: CoordinatesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.mapid = params.get('id');
      if (this.mapid) {
        this.fetchcoordinatDetails(this.mapid);
      }
    });
  }

  fetchcoordinatDetails(coordinateid: string): void {
    this.coordinatesService.coordinatlist().subscribe(
      (data) => {
        this.coordinatDetails =
          data.find((item: any) => item.id === coordinateid) || null;
      },
      (error) => {
        console.error('Error fetching details:', error);
      },
    );
  }
}
