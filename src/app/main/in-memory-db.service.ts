import { InMemoryDbService } from "angular-in-memory-web-api";
import { Student } from "../dto/student";

export class InMemoryDBService implements InMemoryDbService {
  createDb() {
    const students = [
      {Id: 1, Name: 'Aunik', Gender: 'Male'}
    ];
    return {students};
  }
}