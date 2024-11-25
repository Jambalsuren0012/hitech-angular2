import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  menuItems: any = [];
  constructor(private menuService: MenuService) {}
  ngOnInit() {
    this.loadmenu();
  }

  loadmenu() {
    this.menuService.menulist().subscribe({
      next: (data) => {
        this.menuItems = data;
        console.log(this.menuItems);
      },
      error: (err) => console.log(err),
    });
  }

  // Method to toggle the visibility of subtitles

  // Handle selecting a subtitle to create a new sidebar
  selectedItem: any;
  selectedSubtitle: any;

  // Function to set the sidebar content based on the clicked subtitle
  setSidebarContent(subtitle: any) {
    this.selectedItem = this.menuItems.find(
      (item: { subtitle: string | any[] }) => item.subtitle.includes(subtitle),
    );
    this.selectedSubtitle = subtitle;
  }
  categories = [
    { id: '1', name: 'Fiction' },
    { id: '2', name: 'Non-Fiction' },
    { id: '3', name: 'Science' },
    { id: '4', name: 'History' },
    { id: '5', name: 'Biography' },
    { id: '6', name: 'Children' },
    { id: '7', name: 'Fantasy' },
    { id: '8', name: 'Mystery' },
  ];
}
