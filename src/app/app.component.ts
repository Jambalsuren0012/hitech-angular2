import { Component, HostListener, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { loadFull } from 'tsparticles';
import {
  faHouse,
  faGears,
  faHandshake,
  faCertificate,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  faHouse = faHouse;
  faGears = faGears;
  faHandshake = faHandshake;
  faCertificate = faCertificate;
  faBriefcase = faBriefcase;
  activeIndex = 0;
  activeColor = '#ff9a45';
  setActive(index: number) {
    this.activeIndex = index;
  }
  activate(i: number) {
    this.activeIndex = i;
  }

  sections = [
    { id: 'hero', icon: this.faHouse, title: 'Hүүр хуудас' },
    { id: 'services', icon: this.faGears, title: 'Үйлчилгээ' },
    { id: 'partners', icon: this.faHandshake, title: 'Харилцагч' },
    { id: 'certificate', icon: this.faCertificate, title: 'Чадамж' },
    { id: 'experience', icon: this.faBriefcase, title: 'Туршлага' },
  ];
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  activeSection: string = this.sections[0].id;
  activeLinePosition = 0;
  lineHeight = 100 / this.sections.length;

  // 🌠 Cinematic Starfield Effect

  ngAfterViewInit() {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
    setTimeout(() => AOS.refresh(), 100);

    this.updateActiveLineById(this.activeSection);
    this.setupObserver();

    // Custom cursor follow
    const cursor = document.getElementById('custom-cursor') as HTMLImageElement;
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    }
  }

  scrollToSection(id: string, event?: Event) {
    if (event) event.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Active section update delay
    setTimeout(() => {
      this.activeSection = id;
      this.updateActiveLineById(id);
    }, 300);
  }

  setupObserver() {
    const options = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')!;
          this.activeSection = id;
          this.updateActiveLineById(id);
        }
      });
    }, options);

    this.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  }

  updateActiveLineById(id: string) {
    const idx = this.sections.findIndex((s) => s.id === id);
    if (idx < 0) return;
    this.activeLinePosition = (idx * 100) / this.sections.length;
    this.lineHeight = 100 / this.sections.length;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.lineHeight = 100 / this.sections.length;
    this.updateActiveLineById(this.activeSection);
  }
}
