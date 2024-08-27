import { Request, Response } from 'express';
import { CrudService } from '../interfaces/CrudService';



export abstract class BaseController<TService extends CrudService<any>> {
  protected abstract createService(): TService;

  async create(req: Request, res: Response): Promise<void> {
    try {
      const entity = await this.createService().create(req.body);
      res.status(201).json(entity);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const entity = await this.createService().update(req.params.id, req.body);
      if (!entity) {
        res.status(404).json({ message: 'Entity not found' });
        return;
      }
      res.status(200).json(entity);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const entity = await this.createService().findById(req.params.id);
      if (!entity) {
        res.status(404).json({ message: 'Entity not found' });
        return;
      }
      res.status(200).json(entity);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.createService().delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unknown error occurred' });
      }
    }
  }
}
