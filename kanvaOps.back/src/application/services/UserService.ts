import jwt from 'jsonwebtoken';
import { User } from '../../domain/entities/User';
import { Email } from '../../domain/value-objects/Email';
import { Password } from '../../domain/value-objects/Password';
import { UserRepository } from '../../interfaces/repositories/UserRepository';

export class UserService {
  constructor(private userRepository: UserRepository) { }

  async createUser(userData: {
    id: string;
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const email = new Email(userData.email);
    const password = await Password.create(userData.password); // Hashea la contraseña
    const user = new User(userData.id, userData.name, email, password);

    await this.userRepository.save(user);
    return user;
  }

  async updateUser(id: string, userData: {
    name?: string;
    email?: string;
    password?: string;
  }): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }

    if (userData.name) {
      user.updateName(userData.name);
    }

    if (userData.email) {
      const newEmail = new Email(userData.email);
      user.updateEmail(newEmail);
    }

    if (userData.password) {
      user.updatePassword(userData.password);
    }

    await this.userRepository.save(user);
    return user;
  }

  async findUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    await this.userRepository.delete(id);
  }

  async loginUser(email: string, password: string): Promise<{ token: string } | null> {
    const user = await this.userRepository.findByEmail(new Email(email));
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await user.getPassword().equals(password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, email: user.getEmail().getValue(), name: user.name }, process.env.JWT_SECRET!);

    return { token };
  }
}
