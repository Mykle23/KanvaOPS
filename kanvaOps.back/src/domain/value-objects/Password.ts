import bcrypt from 'bcrypt';

export class Password {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static async create(value: string): Promise<Password> {
    const hashedPassword = await bcrypt.hash(value, 10);
    return new Password(hashedPassword);
  }

  public getValue(): string {
    return this.value;
  }

  public async equals(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.value);
  }
}
