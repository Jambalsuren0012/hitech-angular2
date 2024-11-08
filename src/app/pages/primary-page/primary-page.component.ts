import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-primary-page',
  templateUrl: './primary-page.component.html',
  styleUrl: './primary-page.component.css',
})
export class PrimaryPageComponent {
  content = [
    {
      id: '1',
      title:
        'Мэндчилгээ Тэст мэдээлэл орууллаа Мэндчилгээ Тэст мэдээлэл орууллааМэндчилгээ Тэст мэдээлэл орууллааМэндчилгээ Тэст мэдээлэл орууллаа ',
      description:
        'Мэндчилгээ .Товч мэдээ Мэндчилгээ .Товч мэдээМэндчилгээ .Товч мэдээМэндчилгээ .Товч мэдээ',
      info: '<p>Мэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэлМэндчилгээ еТэст мэдээлэл орууллаа. Дэлгэрэнгүй мэдээлэл</p>\r\n',
      readcount: '0',
      menuid: '2',
      highlight: '0',
      picurl: [
        {
          id: '1',
          url: 'https://archaeology.ac.mn/public/uploads/968ac044-1651-4ae8-bdb5-bf31b32999ad/baf4728c-d952-467b-86a4-57b71d82764d.jpg?width=960&rmode=Crop&',
        },
        {
          id: '2',
          url: 'https://archaeology.ac.mn/public/uploads/968ac044-1651-4ae8-bdb5-bf31b32999ad/baf4728c-d952-467b-86a4-57b71d82764d.jpg?width=960&rmode=Crop&',
        },
        {
          id: '3',
          url: 'https://archaeology.ac.mn/public/uploads/968ac044-1651-4ae8-bdb5-bf31b32999ad/baf4728c-d952-467b-86a4-57b71d82764d.jpg?width=960&rmode=Crop&',
        },
      ],
      small_picurl:
        'https://archaeology.ac.mn/public/uploads/968ac044-1651-4ae8-bdb5-bf31b32999ad/baf4728c-d952-467b-86a4-57b71d82764d.jpg?width=960&rmode=Crop&',
      created_at: '2024-11-01 11:52:49',
      created_user: '0',
      updated_at: null,
      updated_user: null,
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,

    responsive: {
      0: { items: 1 }, // 1 item for mobile devices
      600: { items: 1 }, // 2 items for screens wider than 600px
      1000: { items: 1 }, // 3 items for screens wider than 1000px
      1200: { items: 1 }, // 4 items for screens wider than 1200px
    },
  };
}
