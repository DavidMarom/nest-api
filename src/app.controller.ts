import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './books.data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello-2')
  getHello2(): string {
    return this.appService.getHello();
  }

  @Get('books')
  getAllBooks(): Book[] {
    return this.appService.getAllBooks();
  }
}
