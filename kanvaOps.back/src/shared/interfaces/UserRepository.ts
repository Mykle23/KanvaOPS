import { User } from "../../features/users/domain/entities/User";
import { Email } from "../../features/users/domain/value-objects/Email";



export interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  delete(id: string): Promise<void>;
}
