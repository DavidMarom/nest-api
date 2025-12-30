import { Injectable } from '@nestjs/common';
import { getBooks, Book } from './books.data';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllBooks(): Book[] {
    return getBooks();
  }
}
