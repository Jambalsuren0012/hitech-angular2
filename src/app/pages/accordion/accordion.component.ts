import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  activeIndex: number | null = null;

  accordionItems = [
    {
      title: 'Accordion Item 1',
      content:
        'How do I apply for a tour?In addition to applying through the website, you can also apply by phone, LINE, or Messenger.Can I book an international flight ticket?Yes! You can, but please make your reservation early as it is very busy during the tourist season.Can I book a domestic flight ticket?Of course, we can book all domestic flights.Of course, we can book all domestic flights.You can change the itinerary and content to suit your needs. Please feel free to contact us. Of course, you can, but please make your reservation early as it is very busy during the tourist season.Can I enter Mongolia without a visa? As of April 1, 2010, Japanese nationals will no longer need a Mongolian visa for stays of up to 30 days for tourism purposes. A valid passport (with at least 6 months remaining validity, including the number of days of stay) is required when entering the country. Nationals of other countries will need to obtain a visa before departing for Mongolia. Please note that you will not be able to depart without a visa.',
    },
    { title: 'Accordion Item 2', content: 'Content for item 2' },
    { title: 'Accordion Item 3', content: 'Content for item 3' },
  ];

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
