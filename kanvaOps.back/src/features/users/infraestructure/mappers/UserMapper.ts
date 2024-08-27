import { User } from '../../domain/entities/User';
import { Email } from '../../domain/value-objects/Email';
import { Password } from '../../domain/value-objects/Password';

export const mapToDomain = async (userDocument: any): Promise<User> => {
  return new User(
    userDocument._id,
    userDocument.name,
    new Email(userDocument.email),
    await Password.create(userDocument.password)
  );
};

export const mapToPersistence = (user: User): any => {
  return {
    _id: user.id,
    name: user.name,
    email: user.getEmail().getValue(),
    password: user.getPassword().getValue(),
  };
};
