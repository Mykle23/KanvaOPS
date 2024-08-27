export interface CrudService<T, ID = string> {
  create(data: T): Promise<T>;
  update(id: ID, data: Partial<T>): Promise<T | null>;
  findById(id: ID): Promise<T | null>;
  delete(id: ID): Promise<void>;
}
