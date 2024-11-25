import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoordinatesService {
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
  constructor() {}
}
