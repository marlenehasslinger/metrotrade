import { Component } from '@angular/core';
import { MetrocardsService } from '../services/metrocards.service';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cards;

  constructor(private metroCardService: MetrocardsService, private router: Router, private chatService: ChatService) {}

  ngOnInit() {
    this.cards = this.metroCardService.getCards();
    console.log(`OnInit`);
    console.log(this.cards);
  }

  goWithData(name) {
    this.chatService.addChat(name)
    var route = '/chat/'+name;
    this.router.navigateByUrl(route);
  }

}
