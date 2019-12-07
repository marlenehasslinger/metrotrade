import { Component } from '@angular/core';
import { MetrocardsService } from '../services/metrocards.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  chats;

  constructor(private metroCardService: MetrocardsService) {}

  ngOnInit() {
    this.chats = this.metroCardService.getCards();
    console.log(`OnInit`);
    console.log(this.chats);
  }

}
