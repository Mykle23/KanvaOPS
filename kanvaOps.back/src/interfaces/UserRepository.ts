import { User } from "../domain/entities/User";
import { Email } from "../domain/value-objects/Email";


export interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  delete(id: string): Promise<void>;
}
