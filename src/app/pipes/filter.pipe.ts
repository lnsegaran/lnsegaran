import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'underscore';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(items: any[], entity: any, value: any): any {
        if (!items) return items;

        var filteredItems = _.filter(items, (item) => {
            if (value != null) {
                return item[entity].toString() === value.toString();
            } else {
                return false;
            }
        });

        return filteredItems;
    }
}