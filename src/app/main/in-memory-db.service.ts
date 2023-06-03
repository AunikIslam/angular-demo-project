import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDBService implements InMemoryDbService {
  createDb() {
    const students = [
      {id: 1, name: 'Aunik', gender: 'Male'}
    ];
    return {students};
  }
}