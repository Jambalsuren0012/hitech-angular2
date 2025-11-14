import { Component } from '@angular/core';

interface Partner {
  name: string;
  logo: string; // path to image in /assets/partners/...
  alt?: string;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
})
export class PartnersComponent {
  partners: Partner[] = [
    {
      name: 'fortinet',
      logo: 'https://docs.fortinet.com/img/fortinet-logo-white.png',
      alt: 'fortinet logo',
    },
    {
      name: 'dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png',
      alt: 'dell logo',
    },
    {
      name: 'Samsung',
      logo: 'https://www.nicepng.com/png/full/293-2936770_samsung-logo-png-transparent-samsung-logo-black-and.png',
      alt: 'Samsung logo',
    },

    {
      name: 'MOHOC',
      logo: 'https://a.assecobs.com/_res_/akustyk/img/logo/dsppa_logo.png',
      alt: 'МӨНӨС logo',
    },
    {
      name: 'MBA',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hikvision_logo.svg/1200px-Hikvision_logo.svg.png',
      alt: 'MBA logo',
    },
    {
      name: 'lenovo',
      logo: 'https://computerrepair.today/wp-content/uploads/2025/04/Lenovo-Logo-Transparent-PNG.png',
      alt: 'lenovo logo',
    },
    {
      name: 'Canon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canon_wordmark.svg/2560px-Canon_wordmark.svg.png',
      alt: 'Canon logo',
    },

    {
      name: 'Blackvue',
      logo: 'https://cdn.webshopapp.com/shops/107198/files/439720367/ontdek-blackvue-dashcams.jpg',
      alt: 'Blackvue logo',
    },
    {
      name: 'Epson',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Epson_logo.svg/2560px-Epson_logo.svg.png', // эсвэл .png хувилбар
      alt: 'Epson logo',
    },
    {
      name: 'VMware',
      logo: 'https://www.freepnglogos.com/uploads/vmware-png-logo/partners-login-vmware-png-logo-10.png',
      alt: 'VMware logo',
    },
    {
      name: 'ManageEngine',
      logo: 'https://www.manageengine.com/active-directory-360/webinar-series/images/manageengine_logo_white.png',
      alt: 'ManageEngine logo',
    },
    {
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg',
      alt: 'Cisco logo',
    },

    {
      name: 'hp',
      logo: 'https://hpbrighterfutures.com/wp-content/uploads/2025/03/HP-Logo-2012.png',
      alt: 'hp logo',
    },
    {
      name: 'Kaspersky',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png',
      alt: 'Kaspersky logo',
    },
    {
      name: 'HKC',

      logo: 'https://ifdalivestorage.blob.core.windows.net/user-uploads/profile/17420/00000000-0000-0000-0000-000000000000/logo_71b5c68287b44d3d2341ee3789dd0feafc1ea316.png',
      alt: 'HKC logo',
    },
  ];

  initialVisible = 7;

  increment = 8;

  displayedCount = this.initialVisible;

  visiblePartners() {
    if (window.innerWidth >= 768) {
      return this.partners;
    }

    return this.partners.slice(0, this.displayedCount);
  }

  moreCount(): number {
    if (window.innerWidth >= 768) return 0;
    return Math.max(0, this.partners.length - this.displayedCount);
  }

  allShown(): boolean {
    if (window.innerWidth >= 768) return true;
    return this.displayedCount >= this.partners.length;
  }

  showMore() {
    if (this.increment < 0) {
      this.displayedCount = this.partners.length;
    } else {
      this.displayedCount = Math.min(
        this.partners.length,
        this.displayedCount + this.increment,
      );
    }
  }

  showLess() {
    this.displayedCount = this.initialVisible;
  }
}
