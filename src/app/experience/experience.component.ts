import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Experience {
  id?: number;
  title: string;
  color: string;
  animation: string;
  svg: SafeHtml;
  logos?: string[];
  desc?: string;
  list?: string[];
  categories?: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperiencesComponent {
  features: Experience[] = []; // эхлээд хоосон болгоно
  generateRandomPosition() {
    const top = Math.floor(Math.random() * 80); // 0% - 80% хүртэл
    const left = Math.floor(Math.random() * 80);
    return { top: `${top}%`, left: `${left}%` };
  }
  constructor(private sanitizer: DomSanitizer) {
    // sanitizer одоо ашиглахад бэлэн
    this.features = [
      {
        title: 'Уул уурхай',
        color: 'from-accent-pink to-accent-purple',
        animation: 'animate-float',
        logos: [
          'https://investingnews.com/media-library/image.png?id=27744427&width=2000&height=1500&coordinates=27%2C0%2C27%2C0',
          'assets/logos/logo2.png',
          'assets/logos/logo3.png',
        ],
        svg: this.sanitizer!.bypassSecurityTrustHtml(`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" > <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g> <g id="SVGRepo_iconCarrier"> <path d="M12.2651 3.70309C9.72917 3.47824 7.38425 4.16153 5.84197 5.4923C5.65153 5.65663 5.82289 5.9364 6.06757 5.87805C7.78468 5.46852 9.73866 5.38359 11.772 5.68067L12.2651 3.70309Z" stroke="ffffff" stroke-linecap="round" stroke-linejoin="round" ></path> <path d="M15.168 6.52739C17.1029 7.21968 18.7883 8.21203 20.1122 9.37977C20.3009 9.54616 20.5835 9.37959 20.4925 9.14509C19.7555 7.246 18.0058 5.5418 15.6611 4.5498L15.168 6.52739Z" stroke="ffffff" stroke-linecap="round" stroke-linejoin="round" ></path> <rect x="12.4812" y="5.93628" width="2" height="5" transform="rotate(14 12.4812 5.93628)" stroke="ffffff" stroke-linecap="round" stroke-linejoin="round" ></rect> <rect x="10.7865" y="10.6668" width="3" height="9.5" transform="rotate(14 10.7865 10.6668)" stroke="ffffff" stroke-linecap="round" stroke-linejoin="round" ></rect> <rect x="12.3583" y="3.3291" width="3.5" height="2.75" transform="rotate(14 12.3583 3.3291)" stroke="ffffff" stroke-linecap="round" stroke-linejoin="round" ></rect> </g> </svg>
      `),

        list: [
          'Хяналтын камерын шийдэл суурилуулалт',
          'Firewall-Сүлжээний аюулгүй байдал',
          'Дотоод гадаад сүлжээ',
          'Мэдээлэл хадгалах систем',
          'Нэвтрэх системийн шийдэл',
          'ONSITE Ай Ти сервис үйлчилгээ',
        ],
      },
      {
        title: 'Эрүүл мэндийн салбар',
        color: 'from-primary-500 to-accent-cyan',
        animation: 'animate-float-reverse',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g> <g id="SVGRepo_iconCarrier"> <path d="M7 6H5.2C4.0799 6 3.51984 6 3.09202 6.21799C2.71569 6.40973 2.40973 6.71569 2.21799 7.09202C2 7.51984 2 8.0799 2 9.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V9.2C22 8.07989 22 7.51984 21.782 7.09202C21.5903 6.71569 21.2843 6.40973 20.908 6.21799C20.4802 6 19.9201 6 18.8 6H17M2 10H4M20 10H22M2 14H4M20 14H22M12 6V10M10 8H14M17 21V6.2C17 5.0799 17 4.51984 16.782 4.09202C16.5903 3.71569 16.2843 3.40973 15.908 3.21799C15.4802 3 14.9201 3 13.8 3H10.2C9.07989 3 8.51984 3 8.09202 3.21799C7.71569 3.40973 7.40973 3.71569 7.21799 4.09202C7 4.51984 7 5.0799 7 6.2V21H17ZM14 21V17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17V21H14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ></path> </g> </svg>
      `),
        logos: [
          'assets/logos/logo1.png',
          'assets/logos/logo2.png',
          'assets/logos/logo3.png',
        ],
        list: [
          'Бүрэн камерын ажил',
          'Дотоод сүлжээний шийдэл суурилуулалт',
          'Дотоод гадаад сүлжээ',
          'Бараа тоног төхөөрөмж нийлүүлэлт',
          'Ай ти аутсорсинг үйлчилгээ',
        ],
      },
      {
        title: 'Төрийн байгууллага',
        color: 'from-accent-purple to-primary-500',
        animation: 'animate-float',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 14 14" id="svg2" fill="#000000" > <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g> <g id="SVGRepo_iconCarrier"> <metadata id="metadata8"></metadata> <defs id="defs6"></defs> <rect width="14" height="14" x="0" y="0" id="canvas" style="fill: none; stroke: none; visibility: hidden" ></rect> <path d="M 7,0 C 6.75,0.0032 6.5,0.1644239 6.5,0.5 l 0,4.03125 C 3.906144,4.6951647 3,6.060613 3,7 l 8,0 C 11,6.060613 10.093856,4.6951647 7.5,4.53125 L 7.5,0.5 C 7.5,0.1516409 7.25,-0.0031957 7,0 z M 8,0 8,3 12,3 10,1.5 12,0 8,0 z m -7,8 0,1 1,0 0,4 -1,0 -1,1 14,0 -1,-1 -1,0 0,-4 1,0 0,-1 -12,0 z m 3,1 1,0 0,4 -1,0 0,-4 z m 2,0 2,0 0,4 -2,0 0,-4 z m 3,0 1,0 0,4 -1,0 0,-4 z" id="government" style="fill: #ffffff; fill-opacity: 1; stroke: none" ></path> </g> </svg>
      `),
        logos: [
          'assets/logos/logo1.png',
          'assets/logos/logo2.png',
          'assets/logos/logo3.png',
        ],
        list: [
          'Азийн хөгжлийн банкны санхүүжилтээр серверийн өрөө, интернет',
          'Сүлжээ болон Серверийн ажил, Лед дэлгэцийн шийдэл суурилуулалт',
          'Дижитал хэвлэлийн машин суурилуулалт, бараа нийлүүлэлт',
        ],
      },
      {
        title: 'Олон улсын байгууллага',
        color: 'from-accent-cyan to-primary-500',
        animation: 'animate-float-reverse',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" > <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g> <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_1252)"> <path d="M31 16.001C31 24.285 24.284 31.001 16 31.001C7.716 31.001 1 24.285 1 16.001M31 16.001C31 7.717 24.284 1.001 16 1.001C7.716 1.001 1 7.717 1 16.001M31 16.001H1M11.834 1.5879C9.397 5.8329 8.004 10.7549 8.004 16.0009C8.004 21.2469 9.396 26.1689 11.834 30.4139M20.1699 30.4121C22.6079 26.1681 23.9999 21.2471 23.9999 16.0011C23.9999 10.7571 22.6069 5.8381 20.1719 1.5901M27.6543 25.4395C24.0883 23.8745 20.1473 23.0045 16.0043 23.0045C11.8573 23.0045 7.9143 23.8765 4.3453 25.4435M4.3486 6.5635C7.9146 8.1315 11.8576 9.0015 16.0036 9.0015C20.1486 9.0015 24.0896 8.1305 27.6586 6.5635M15.999 1V31" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ></path> </g> <defs> <clipPath id="clip0_901_1252"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g> </svg>
      `),
        logos: [
          'assets/logos/logo1.png',
          'assets/logos/logo2.png',
          'assets/logos/logo3.png',
        ],
        list: [
          'FORTINET',
          'Дотоод сүлжээ',
          'Ай Ти сервис үйлчилгээ',
          'Хяналтын камерын систем',
          'Сервер тоног төхөөрөмжийн үйлчилгээ',
          'интернет сүлжээний ажил',
        ],
      },
      {
        title: 'Барилгын салбар',
        color: 'from-accent-pink to-accent-cyan',
        animation: 'animate-float',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
    <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 252" enable-background="new 0 0 256 252" xml:space="preserve" stroke="#ffffff" > <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g> <g id="SVGRepo_iconCarrier"> <path d="M19.719,76.781v75.797H2v71.859h17.719h60.047V76.781H19.719z M57.125,189.984H42.359v-14.766h14.766V189.984z M42.359,152.578v-14.766h14.766v14.766H42.359z M254,39.375h-61.031v105.328H222.5h7.875v7.875v70.875H254V39.375z M231.359,114.188h-14.766V99.422h14.766V114.188z M231.359,76.781h-14.766V62.016h14.766V76.781z M185.094,152.578V1.969h-60.047 v37.406H87.641v210.656H222.5v-97.453H185.094z M125.047,152.578h-14.766v-14.766h14.766V152.578z M125.047,114.188h-14.766V99.422 h14.766V114.188z M162.453,227.391h-14.766v-14.766h14.766V227.391z M162.453,189.984h-14.766v-14.766h14.766V189.984z M162.453,152.578h-14.766v-14.766h14.766V152.578z M162.453,76.781h-14.766V62.016h14.766V76.781z M199.859,227.391h-14.766 v-14.766h14.766V227.391z M199.859,189.984h-14.766v-14.766h14.766V189.984z" ></path> </g> </svg>
      `),
        logos: [
          'assets/logos/logo1.png',
          'assets/logos/logo2.png',
          'assets/logos/logo3.png',
        ],
        list: [
          'PCDP LLC сервер тоног төхөөрөмжийн үйлчилгээ',
          'TOP GLASS IT сервис үйлчилгээ, Office 365 үйлчилгээ',
          'SD Engineering IT сервис үйлчилгээ, Office 365 үйлчилгээ',
          'IDC камерын цогц шийдэл',
          'Дундговь аймгийн 16 сумын сургуулийн бүрэн камержуулалт',
          'Дотоод сүлжээний бүрэн ажил гүйцэтгэл',
        ],
      },
      {
        title: 'Боловсролын салбар',
        color: 'from-primary-500 to-accent-pink',
        animation: 'animate-float-reverse',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
   <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M31.514 11.177l-15.514-7.467-15.514 7.467 2.186 1.318v11.529h1.066v-10.886l3.199 1.929v13.223h18.126v-13.219l6.451-3.894zM16 4.893l13.275 6.39-13.267 8.008-13.282-8.009 13.274-6.39zM23.997 27.224h-15.994v-11.514l8.005 4.827 7.989-4.823v11.51z" fill="#ffffff"> </path> </g></svg>
      `),
        logos: ['', '', ''],
        list: [
          'Оюутны дотуур байрын бүрэн камержуулалт',
          'Галын дохиолол, зарлан мэдээлэх систем',
          'Булган аймгийн 16 сумын сургуулийн бүрэн камержуулалт',
          'БЗД-ийн цэцэрлэг, сургуулийн бүрэн камержуулалт',
          'Дотоод сүлжээний бүрэн ажил гүйцэтгэл',
        ],
      },

      // бусад feature-үүдээ энд үргэлжлүүлнэ
    ];
  }
}
