
import { Email } from '../value-objects/Email';
import { Password } from '../value-objects/Password';

export class User {
  constructor(
    public id: string,
    public name: string,
    private email: Email,
    private password: Password
  ) { }

  async checkPassword(inputPassword: string): Promise<boolean> {
    return this.password.equals(inputPassword);
  }

  updateName(newName: string): void {
    this.name = newName;
  }

  updateEmail(newEmail: Email): void {
    this.email = newEmail;
  }

  getEmail(): Email {
    return this.email;
  }

  getPassword(): Password {
    return this.password;
  }
}
