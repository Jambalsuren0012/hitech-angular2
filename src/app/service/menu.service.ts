import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItem = [
    {
      id: 1,
      name: 'About Us',

      subtitle: [
        {
          id: 1,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Greeting',
          path: '/',
        },
        {
          id: 2,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Introduction',
          path: '/',
        },
        {
          id: 3,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Structure',
          path: '/',
        },
        {
          id: 4,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Academic Council',
          path: '/',
        },
        {
          id: 5,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Strategic Goals',
          path: '/',
        },
        { id: 6, type: 2, title: 'Research Directions', path: '/' },
      ],
    },
    {
      id: 2,
      name: 'Sectors', // Translation key for "Салбарууд"
      info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> adasdasd a das dasdasdasdСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
      subtitle: [
        {
          id: 7,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Administration',
          path: '/',
        }, // Translation key for "Захиргаа, аж ахуй"
        {
          id: 8,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',

          path: '/',
        }, // Translation key for "Чулуун зэвсгийн судалгааны салбар Судлаачид"
        {
          id: 9,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Bronze and Iron Research',
          path: '/',
        }, // Translation key for "Хүрэл, төмрийн үеийн судалгааны салбар Судлаачид"
        { id: 10, type: 2, title: 'Hunnus and Ancient Studies', path: '/' }, // Translation key for "Хүннү ба эртний улсуудын судалгааны салбар Судлаачид"
        {
          id: 11,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Medieval Research',
          path: '/',
        }, // Translation key for "Дундад зууны судалгааны салбар Судлаачид"
        {
          id: 12,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Innovation and Cooperation',
          path: '/',
        }, // Translation key for "Инновац, хамтын ажиллагааны салбар Судлаачид"
        {
          id: 13,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Archive and Laboratory',
          path: '/',
        }, // Translation key for "Сан хөмрөг, лабораторийн салбар Судлаачид"
      ],
    },
    {
      id: 3,
      name: 'Laws and Regulations', // Translation key for "Хууль, журам"
      subtitle: [
        {
          id: 14,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Law and Order',
          path: '/',
        }, // Translation key for "Хууль ГУуль"
        {
          id: 15,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Regulations',
          path: '/',
        }, // Translation key for "Журам"
        {
          id: 16,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Transparency',
          path: '/',
        }, // Translation key for "Шилэн данс"
      ],
    },
    {
      id: 4,
      name: 'Research and Development', // Translation key for "Эрдэм шинжилгээ"
      subtitle: [
        {
          id: 17,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Achievements',
          path: '/',
        }, // Translation key for "Ололт амжилт"
        {
          id: 18,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Research Conferences',
          path: '/',
        }, // Translation key for "Эрдэм шинжилгээний хурал"
        {
          id: 19,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Special Exhibitions',
          path: '/',
        }, // Translation key for "Тусгай үзэсгэлэн"
        {
          id: 20,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Domestic Cooperation',
          path: '/',
        }, // Translation key for "Дотоод хамтын ажиллагаа"
        {
          id: 21,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Strategic Goals',
          path: '/',
        }, // Translation key for "Стратеги зорилт"
        {
          id: 22,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'International Cooperation',
          path: '/',
        }, // Translation key for "Гадаад хамтын ажиллагаа"
      ],
    },
    {
      id: 5,
      name: 'Publications', // Translation key for "Ном бүтээл"
      subtitle: [
        {
          id: 23,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',

          title: 'Monographs',
          path: '/',
        }, // Translation key for "Нэгэн сэдэвт бүтээл"
        {
          id: 24,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Collaborative Works and Books',
          path: '/',
        }, // Translation key for "Хамтын бүтээл, ном товхимол"
        {
          id: 25,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: '"Archaeological Research" Journal',
          path: '/',
        }, // Translation key for "“Археологийн судлал” сэтгүүл"
        {
          id: 26,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: '"Mongolian Archaeological News" E-Journal',
          path: '/',
        }, // Translation key for "“Монголын археологийн мэдээ” цахим сэтгүүл"
        {
          id: 27,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Strategic Goals',
          path: '/',
        }, // Translation key for "Стратеги зорилт"
        {
          id: 28,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'International Cooperation',
          path: '/',
        }, // Translation key for "Гадаад хамтын ажиллагаа"
      ],
    },
    {
      id: 6,
      name: 'Gallery', // Translation key for "Галерей"
      subtitle: [
        {
          id: 29,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Documentary Films',
          path: '/',
        }, // Translation key for "Баримтат кино"
        {
          id: 30,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Broadcasts and Interviews',
          path: '/',
        }, // Translation key for "Нэвтрүүлэг, ярилцлага"
        {
          id: 31,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Articles',
          path: '/',
        }, // Translation key for "Нийтлэл"
        {
          id: 32,
          type: 1,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Photo Albums',
          path: '/',
        }, // Translation key for "Зургийн цомог"
      ],
    },
    {
      id: 7,
      name: 'News and Updates', // Translation key for "Мэдээ мэдээлэл"
      subtitle: [
        {
          id: 33,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Administration',
          path: '/',
        }, // Translation key for "Захиргаа, аж ахуй"
        {
          id: 34,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Stone Age Research',
          path: '/',
        }, // Translation key for "Чулуун зэвсгийн судалгааны салбар Судлаачид"
        {
          id: 35,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Bronze and Iron Research',
          path: '/',
        }, // Translation key for "Хүрэл, төмрийн үеийн судалгааны салбар Судлаачид"
        {
          id: 36,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Hunnus and Ancient Studies',
          path: '/',
        }, // Translation key for "Хүннү ба эртний улсуудын судалгааны салбар Судлаачид"
        {
          id: 37,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Medieval Research',
          path: '/',
        }, // Translation key for "Дундад зууны судалгааны салбар Судлаачид"
        {
          id: 38,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Innovation and Cooperation',
          path: '/',
        }, // Translation key for "Инновац, хамтын ажиллагааны салбар Судлаачид"
        {
          id: 39,
          type: 2,
          info: '<div class="max-w-screen-2xl mx-auto">\r\n<div class="flex flex-col md:flex-row justify-center">&nbsp;\r\n<ul>\r\n\t<li> sub shuuСуудал болон ар нь арьсаар хийгдсэн</li>\r\n\t<li>Арыг хэвтээ чиглэлд 3-н өөр байрлалд тохируулдаг, өндөр намыг биеийн хэмжээнд тохируулан хэрэглэх боломжтой</li>\r\n\t<li>Сандлын өргөгч гидр болон таван салаа бүхий суурь нь хром өнгөлгөөтэй, бат бөх дугуйтай</li>\r\n</ul>\r\n</div>\r\n</div>\r\n',
          title: 'Archive and Laboratory',
          path: '/',
        }, // Translation key for "Сан хөмрөг, лабораторийн салбар Судлаачид"
      ],
    },
  ];

  menuitem = this.menuItem;
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  menulist(): Observable<any> {
    return new Observable((observer) => {
      observer.next(this.menuItem); // Emit the static menuItem list
      observer.complete(); // Complete the observable
    });
  }
}
