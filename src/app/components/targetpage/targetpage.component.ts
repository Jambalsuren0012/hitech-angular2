import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-targetpage',
  templateUrl: './targetpage.component.html',
  styleUrls: ['./targetpage.component.css'],
})
export class TargetpageComponent implements OnInit {
  mapid: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get mapid from route parameter
    this.mapid = this.route.snapshot.paramMap.get('mapid');
  }
}
