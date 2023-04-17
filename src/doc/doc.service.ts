import { Injectable } from '@nestjs/common';
import { docDto } from './dtos/doc.dto';

@Injectable()
export class DocService {
  getDocs(): Promise<docDto>{
    return new Promise((resolve) => {
      const res = {
        title: `Yes I Do`
      };
      resolve(res);
    })
  }
  getAllDocs(): string {
    return 'get AllDocs';
  }
}
