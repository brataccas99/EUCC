import {
  Component,
  Input,
  ElementRef,
  AfterViewChecked,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { Message } from 'src/models/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements AfterViewChecked {
  @Input() messages: Message[] = [];
  @ViewChild('messageList') messageList!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.messageList) {
      const messageListElement = this.messageList.nativeElement as HTMLElement;
      messageListElement.scrollTop = messageListElement.scrollHeight;
      this.cdr.detectChanges();
    }
  }
}
