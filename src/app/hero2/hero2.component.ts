import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css',
})
export class Hero2Component implements AfterViewInit {
  @ViewChild('parallaxWrap') wrapRef!: ElementRef<HTMLDivElement>;
  @ViewChild('parallaxImg') imgRef!: ElementRef<HTMLImageElement>;
  @ViewChild('titleText') titleElement!: ElementRef;

  ngAfterViewInit(): void {
    const el = this.titleElement.nativeElement;
    const text = el.innerText.trim();
    const letters = text.split('');

    el.innerHTML = letters
      .map((l: string) => `<span class="letter">${l}</span>`)
      .join('');

    const spans = el.querySelectorAll('.letter') as NodeListOf<HTMLElement>;
    const mid = Math.floor(spans.length / 2);

    spans.forEach((span, i) => {
      const dist = Math.abs(i - mid);
      span.style.animationDelay = dist * 0.08 + 's';
    });

    const wrap = this.wrapRef.nativeElement;
    const img = this.imgRef.nativeElement;

    // Гар утас эсвэл reduced motion шалгах
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      img.style.transform = 'translate3d(0,0,0)';
      return;
    }

    const maxTranslate = 40;
    const ease = 0.12;
    const pointer = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let rafId: number | null = null;

    const clamp = (v: number, a: number, b: number) =>
      Math.max(a, Math.min(b, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.x = lerp(current.x, pointer.x, ease);
      current.y = lerp(current.y, pointer.y, ease);

      img.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      if (
        Math.abs(current.x - pointer.x) < 0.1 &&
        Math.abs(current.y - pointer.y) < 0.1
      ) {
        rafId && cancelAnimationFrame(rafId);
        rafId = null;
        return;
      }

      rafId = requestAnimationFrame(animate);
    };

    const startRAF = () => {
      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = wrap.getBoundingClientRect();
      const clientX =
        e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY =
        e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const nx = (clientX - cx) / (rect.width / 2);
      const ny = (clientY - cy) / (rect.height / 2);

      pointer.x = clamp(nx * maxTranslate, -maxTranslate, maxTranslate);
      pointer.y = clamp(ny * maxTranslate, -maxTranslate, maxTranslate);

      startRAF();
    };

    const onPointerLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
      startRAF();
    };

    wrap.addEventListener('mousemove', onPointerMove);
    wrap.addEventListener('mouseleave', onPointerLeave);
    wrap.addEventListener('touchmove', onPointerMove, { passive: true });
    wrap.addEventListener('touchend', onPointerLeave);
  }
}
