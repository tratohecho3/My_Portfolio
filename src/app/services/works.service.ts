import { Injectable } from '@angular/core';
import { WORKS} from '../list_of_works';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor() { }

  get_works(){
    return WORKS
  }
}
