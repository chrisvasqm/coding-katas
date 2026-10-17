export class StackOverflowPost {
  title: string;
  description: string;
  private votes = 0;
  readonly createdAt: Date = new Date();

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  upVote(): void {
    this.votes++;
  }

  downVote(): void {
    this.votes--;
  }

  getVotes(): number {
    return this.votes;
  }
}
