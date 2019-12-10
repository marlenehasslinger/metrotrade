import { Component } from '@angular/core';
import { MetrocardsService } from '../services/metrocards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards;

  constructor(private metroCardService: MetrocardsService, private router: Router) {}

  ngOnInit() {
    this.cards = this.metroCardService.getCards();
    console.log(`OnInit`);
    console.log(this.cards);
  }

  goWithData(name) {
    var route = '/chat/'+name;
    this.router.navigateByUrl(route);
  }

}
