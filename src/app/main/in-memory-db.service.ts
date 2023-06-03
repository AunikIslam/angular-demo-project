import { InMemoryDbService } from "angular-in-memory-web-api";
import { Student } from "../dto/student";

export class InMemoryDBService implements InMemoryDbService {
  createDb() {
    const students: Student[] = [];
    return {students};
  }
}