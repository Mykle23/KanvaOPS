import { Request, Response } from 'express';
import { UserService } from '../../application/services/UserService';
import { BaseController } from './BaseController';


export class UserController extends BaseController<UserService> {
  private userService: UserService;

  constructor(userService: UserService) {
    super();
    this.userService = userService;
  }

  protected createService(): UserService {
    return this.userService;
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const token = await this.userService.loginUser(req.body.email, req.body.password);
      res.status(200).json(token);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }
}
