import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[];

  getAll(): Cat[] {
    return this.cats;
  }
  create(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }
}
