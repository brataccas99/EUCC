import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
})
export class ChatPageComponent implements OnInit {
  @ViewChild('messageList') messageList: ElementRef | undefined;

  message: Message = new Message('', 'assets/images/bot.png');
  messages: Message[] = [];

  constructor(private cdRef: ChangeDetectorRef) {}

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

    // Scroll to the last message
    if (this.messageList) {
      this.cdRef.detectChanges(); // Trigger change detection
      const messageListElement = this.messageList.nativeElement as HTMLElement;
      messageListElement.scrollTop = messageListElement.scrollHeight;
    }
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
    textarea.style.height = '4%';
  }
}
