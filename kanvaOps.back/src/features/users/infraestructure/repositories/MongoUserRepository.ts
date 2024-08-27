import { UserRepository } from '../../../../shared/interfaces/UserRepository';
import { User } from '../../domain/entities/User';
import { Email } from '../../domain/value-objects/Email';
import { mapToDomain, mapToPersistence } from '../mappers/UserMapper';
import { UserModel } from '../models/UserModel';

export class MongoUserRepository implements UserRepository {
  async save(user: User): Promise<void> {
    const userRecord = new UserModel(mapToPersistence(user));
    await userRecord.save();
  }

  async findById(id: string): Promise<User | null> {
    const userDocument = await UserModel.findById(id);
    if (!userDocument) return null;
    return await mapToDomain(userDocument);
  }

  async findByEmail(email: Email): Promise<User | null> {
    const userDocument = await UserModel.findOne({ email: email.getValue() });
    if (!userDocument) return null;
    return await mapToDomain(userDocument);
  }

  async delete(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
