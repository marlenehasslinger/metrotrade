import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  name;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
