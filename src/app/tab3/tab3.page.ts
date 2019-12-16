import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  chats;

  constructor(private chatService: ChatService, private router: Router) {}

  ngOnInit() {
    this.chats = this.chatService.getChats();
    console.log(`OnInit`);
    console.log(this.chats);
  }

  goWithData(name) {
    var route = '/chat/'+name;
    this.router.navigateByUrl(route);
  }

}