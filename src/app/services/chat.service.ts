import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
chats = [];

  constructor() { }

  getChats(){
  console.log(this.chats);
  return this.chats;
  }

  addChat(name){
  this.chats.push(
    {
      name: name,
    });
  }

}
