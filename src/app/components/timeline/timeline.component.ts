import {
  Component,
  AfterViewInit,
  HostListener,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements AfterViewInit {
  timelineItems = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Erdene_Zuu_Monastery_05.jpg',
      date: '2002',
      titles: [
        {
          title:
            'Монгол Германы хамтарсан "Хархорум" експедицийн үйл ажиллагааг сурталчилах гэрэл зургийн үзэсгэлэнг Монголын Үндэсний түүхийн музейд зохион байгууллав',
        },
        {
          title:
            'Монгол-Солонгосын хамтарсан төслийн "Мон-Сол" 5 жил Үзэсгэлэн',
        },
        {
          title:
            'Монгол-Францын хамтарсан ‘’Нүүдэлчдийн эзэнт гүрэн’’ төслийн хүрээнд хийгдсэн ‘’Талын эзэнт гүрэн’’ баримтат киноны нээлтийг Франц, Монгол улсад зохион байгуулав.',
        },
      ],
    },
    {
      img: 'https://www.escapetomongolia.com/__data/assets/image/0021/6276/Orkhon_Waterfall.jpg',
      date: '2003',
      titles: [
        {
          title:
            'Францын Элчин сайдын яамтай хамтран археологич Ц.Доржсүрэнгийн дурсгалд зориулан Монгол-Францын хамтарсан судалгааны 10 жилийн үр дүн “Хүннүгээс Чингисийн эзэнт гүрэн хүртэл” нэртэй үзэсгэлэн (Дүрслэх урлагийн музей)',
        },
        {
          title:
            'Нэрт археологич агсан Н.Сэр-Оджав, Ц.Доржсүрэн нарын мэндэлсэний 80 жилийн ойд зориулсан эрдэм шинжилгээний бага хурал, бэсрэг үзэсгэлэн',
        },
        {
          title:
            'Монголын Үндэсний түүхийн музей, Солонгосын Үндэсний музейн хамтарсан Монгол-Солонгосын Эрдэм шинжилгээний анхдугаар симпозиум',
        },
        {
          title:
            'Монгол-Солонгосын хамтарсан “Мон-Сол” төслийн эрдэм шинжилгээний II симпозиум',
        },
      ],
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Erdene_Zuu_Monastery_05.jpg',
      date: '2004',
      titles: [
        {
          title:
            'Монгол Германы хамтарсан "Хархорум" експедицийн үйл ажиллагааг сурталчилах гэрэл зургийн үзэсгэлэнг Монголын Үндэсний түүхийн музейд зохион байгууллав',
        },
        {
          title:
            'Монгол-Солонгосын хамтарсан төслийн "Мон-Сол" 5 жил Үзэсгэлэн',
        },
        {
          title:
            'Монгол-Францын хамтарсан ‘’Нүүдэлчдийн эзэнт гүрэн’’ төслийн хүрээнд хийгдсэн ‘’Талын эзэнт гүрэн’’ баримтат киноны нээлтийг Франц, Монгол улсад зохион байгуулав.',
        },
        {
          title:
            'Монгол-Францын хамтарсан ‘’Нүүдэлчдийн эзэнт гүрэн’’ төслийн хүрээнд хийгдсэн ‘’Талын эзэнт гүрэн’’ баримтат киноны нээлтийг Франц, Монгол улсад зохион байгуулав.',
        },
        {
          title:
            'Монгол-Францын хамтарсан ‘’Нүүдэлчдийн эзэнт гүрэн’’ төслийн хүрээнд хийгдсэн ‘’Талын эзэнт гүрэн’’ баримтат киноны нээлтийг Франц, Монгол улсад зохион байгуулав.',
        },
      ],
    },
    {
      img: 'https://mongolia-guide.com/uploads/main/bayankhongor/places/tsagaan%20agui1.jpg',
      date: '2005',
      titles: [
        {
          title:
            'Хархорум-жишиг хот” сэдэвт зөвлөгөөнд оролцогсдод зориулсан Монгол-Германы хамтарсан “Хархорум” төслийн олдвор хэрэглэгдэхүүний бэсрэг үзэсгэлэн',
        },
        {
          title:
            'Монгол, ХБНГУ-ын хооронд дипломат харилцаа тогтоосны 30 жилийн ойд зориулан “Хархорум” төслийн үйл ажиллагааг сурталчилсан үзэсгэлэн',
        },
        {
          title:
            'БСШУЯ, ТИКА-тай хамтарсан Монгол-Туркийн ”Монгол нутаг дахь Түрэгийн үеийн зарим хөшөө дурсгалыг малтан судлах, сэргээн засварлах, хадгалж хамгаалах нь“ төслийн үр дүнд илэрсэн олдворын үзэсгэлэн',
        },
        {
          title:
            'Монгол улсад хамтарсан төсөл хэрэгжүүлж буй Европын орнуудын археологчдын судалгааны үр дүнгийн талаар Францын ЭСЯ, Улаанбаатар дахь Францын соёлын төвтэй хамтарсан “Монгол дахь Европийн археологийн судалгаа. Шинэ нээлтүүд ба судалгааны зарим асуудлууд” олон улсын эрдэм шинжилгээний бага хурал',
        },
      ],
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Erdene_Zuu_Monastery_05.jpg',
      date: '2006',
      titles: [
        {
          title:
            'Монгол Германы хамтарсан "Хархорум" експедицийн үйл ажиллагааг сурталчилах гэрэл зургийн үзэсгэлэнг Монголын Үндэсний түүхийн музейд зохион байгууллав',
        },
        {
          title:
            'Монгол-Солонгосын хамтарсан төслийн "Мон-Сол" 5 жил Үзэсгэлэн',
        },
        {
          title:
            'Монгол-Францын хамтарсан ‘’Нүүдэлчдийн эзэнт гүрэн’’ төслийн хүрээнд хийгдсэн ‘’Талын эзэнт гүрэн’’ баримтат киноны нээлтийг Франц, Монгол улсад зохион байгуулав.',
        },
      ],
    },
  ];

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setInitialBackgroundImage();
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent): void {
    // Prevent default scrolling behavior
    event.preventDefault();

    // Slow down the scroll by dividing the deltaY
    const scrollSpeed = 2; // Adjust the scroll speed (higher = slower scroll)
    const delta = event.deltaY / scrollSpeed;

    // Apply the custom scroll behavior
    window.scrollBy({
      top: delta,
      behavior: 'smooth', // Optional: Add smooth scroll effect
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const items = this.elRef.nativeElement.querySelectorAll('.timeline-item');
    const timeline = this.elRef.nativeElement.querySelector('#timeline-1');
    const viewportHeight = window.innerHeight;

    const activationThreshold = viewportHeight * 0.8; // Activate when 80% down the viewport

    items.forEach((item: HTMLElement, index: number) => {
      const rect = item.getBoundingClientRect();
      const itemTop = rect.top;
      const itemBottom = rect.bottom;

      const isInViewport = itemTop <= viewportHeight && itemBottom >= 0;
      const isLastItem = index === items.length - 1;

      if (isInViewport) {
        if (itemTop <= activationThreshold) {
          this.setActiveItem(timeline, item, items);
        }
      }

      if (isLastItem && itemTop <= activationThreshold) {
        this.setActiveItem(timeline, item, items, true);
      }
    });
  }

  setInitialBackgroundImage(): void {
    const timeline = this.elRef.nativeElement.querySelector('#timeline-1');
    const firstItem = this.elRef.nativeElement.querySelector('.timeline-item');
    if (firstItem) {
      const imgUrl = firstItem
        .querySelector('.timeline__img')
        .getAttribute('src');
      timeline.style.backgroundImage = `url(${imgUrl})`;
      firstItem.classList.add('timeline-item--active');
    }
  }

  setActiveItem(
    timeline: HTMLElement,
    item: HTMLElement,
    items: NodeListOf<HTMLElement>,
    isLast: boolean = false,
  ): void {
    items.forEach((i) => i.classList.remove('timeline-item--active'));
    item.classList.add('timeline-item--active');
    const imgUrl = item.querySelector('.timeline__img')?.getAttribute('src');
    timeline.style.backgroundImage = `url(${imgUrl})`;

    // Special logic for the last item
    if (isLast) {
      items[items.length - 1].classList.add('timeline-item--active');
    }
  }
}
