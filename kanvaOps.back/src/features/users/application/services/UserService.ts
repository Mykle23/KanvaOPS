import jwt from 'jsonwebtoken';
import { CrudService } from '../../../../shared/interfaces/CrudService';
import { UserRepository } from '../../../../shared/interfaces/UserRepository';
import { User } from '../../domain/entities/User';
import { Email } from '../../domain/value-objects/Email';


export class UserService implements CrudService<User> {
  constructor(private userRepository: UserRepository) { }

  async create(userData: User): Promise<User> {
    await this.userRepository.save(userData);
    return userData;
  }

  async update(id: string, userData: Partial<{ name: string; email: string; password: string }>): Promise<User | null> {
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
      await user.updatePassword(userData.password);
    }

    await this.userRepository.save(user);
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async delete(id: string): Promise<void> {
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

    const isPasswordValid = await user.checkPassword(password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, email: user.getEmail().getValue(), name: user.name }, process.env.JWT_SECRET!);

    return { token };
  }
}
