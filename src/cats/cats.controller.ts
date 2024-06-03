import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAll(): Cat[] {
    return this.catsService.getAll();
  }

  @Post()
  create(cat: Cat): Cat {
    return this.catsService.create(cat);
  }
}
