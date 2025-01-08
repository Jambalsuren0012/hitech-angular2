import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from '../../service/members.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.component.html',
  styleUrls: ['./membersdetails.component.css'],
})
export class MembersdetailsComponent implements OnInit {
  memberId: string | null = null;
  memberDetails: any = {}; // Store member details
  isLoading = true;
  imageUrl = environment.imgUrl; // Base URL for image files

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService, // Service to fetch member details
  ) {}

  ngOnInit(): void {
    // Retrieve the member id from the route parameter
    this.route.paramMap.subscribe((params) => {
      this.memberId = params.get('id'); // Get the 'id' parameter from the URL
      if (this.memberId) {
        this.fetchMemberDetails(this.memberId); // Fetch member details based on the id
      }
    });
  }

  fetchMemberDetails(id: string): void {
    this.membersService.getMemberById(id).subscribe(
      (response: any) => {
        this.memberDetails = response[0]; // Assuming the response is an array and the member is the first object
        console.log('Fetched Member Details:', this.memberDetails);
      },
      (error) => {
        console.error('Error fetching member details:', error);
      },
    );
  }
}
