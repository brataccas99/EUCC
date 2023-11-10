export class Message {
  content: string;
  timestamp: number | undefined;
  avatar: string;

  constructor(content: string, avatar: string, timestamp?: number) {
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}
