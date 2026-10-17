export class Post {
  readonly title: string;
  readonly description: string;
  private currentVotes = 0;
  readonly createdAt: Date = new Date();

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  upVote(): void {
    this.currentVotes++;
  }

  downVote(): void {
    this.currentVotes--;
  }

  get votes(): number {
    return this.currentVotes;
  }
}
