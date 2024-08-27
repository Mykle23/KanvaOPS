export class Email {
  private readonly value: string;

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new Error('Invalid email format');
    }
    this.value = value;
  }

  private validate(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: Email): boolean {
    return this.value === other.getValue();
  }
}
