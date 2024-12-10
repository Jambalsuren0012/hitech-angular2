import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'responsiveHtml',
})
export class ResponsiveHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) {
      return '';
    }
    const responsiveHtml = value.replace(
      /<img /g,
      '<img class="w-full max-w-full h-auto" ',
    );
    return this.sanitizer.bypassSecurityTrustHtml(responsiveHtml);
  }
}
