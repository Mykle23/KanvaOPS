import { Router } from 'express';
import { authMiddleware } from '../../../../shared/middleware/authMiddleware';
import { UserService } from '../../application/services/UserService';
import { UserController } from '../controllers/UserController';
import { MongoUserRepository } from '../repositories/MongoUserRepository';

const userRouter = Router();

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.post('/register', (req, res) => userController.create(req, res));
userRouter.patch('/users/:id', authMiddleware, (req, res) => userController.update(req, res));
userRouter.get('/users/:id', authMiddleware, (req, res) => userController.findById(req, res));
userRouter.delete('/users/:id', authMiddleware, (req, res) => userController.delete(req, res));
userRouter.post('/login', (req, res) => userController.login(req, res));

export { userRouter };

