import { Pipe, PipeTransform } from '@angular/core';
import { Grade } from '../types/Grade';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {

  transform(object: Grade): number {
    return (object.grade1 + object.grade2) / 2;
  }

}
