export class Message {
  content: string;
  avatar: string;
  sender: 'user' | 'chatbot';
  timestamp: number | undefined;

  constructor(
    content: string,
    avatar: string,
    sender: 'user' | 'chatbot',
    timestamp?: number
  ) {
    this.content = content;
    this.avatar = avatar;
    this.sender = sender;
    this.timestamp = timestamp;
  }
}
