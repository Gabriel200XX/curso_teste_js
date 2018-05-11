import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor() { }

  public example(title): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(undefined);
    });
  }
}
