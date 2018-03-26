import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //public messaveService because it will bind to the template.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
