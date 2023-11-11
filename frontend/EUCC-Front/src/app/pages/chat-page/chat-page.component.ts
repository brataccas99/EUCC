import { Component, OnInit } from '@angular/core';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  message: Message = new Message('', 'assets/images/bot.png');
  messages: Message[] = [];

  ngOnInit() {}

  public sendMessage(): void {
    this.message.timestamp = new Date().getTime();
    this.messages.push(
      new Message(
        this.message.content,
        'assets/images/user.png',
        this.message.timestamp
      )
    );

    this.message.content = '';
    const textarea = document.querySelector(
      '.auto-expand'
    ) as HTMLTextAreaElement;
    textarea.style.height = 'auto';
  }

  calculateRows(): number {
    return this.message.content.split('\n').length;
  }

  calculateCols(): number {
    return (
      Math.max(...this.message.content.split('\n').map((line) => line.length)) +
      1
    );
  }

  adjustTextareaSize(event: any): void {
    const textarea = event.target;
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
