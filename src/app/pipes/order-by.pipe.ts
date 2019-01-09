import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'underscore';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(items: any[], filter: any, asc: any): any[] {
    if (!filter) return items;

    if (asc) {
      return _.sortBy(items, filter);
    } else {
      return _.sortBy(items, filter).reverse();
    }

  }
}