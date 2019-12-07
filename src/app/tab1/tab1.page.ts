import { Component } from '@angular/core';
import { MetrocardsService } from '../services/metrocards.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards;

  constructor(private metroCardService: MetrocardsService) {}

  ngOnInit() {
    this.cards = this.metroCardService.getCards();
    console.log(`OnInit`);
    console.log(this.cards);
  }

}
