import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keyValue'})
export class KeyValuePipe implements PipeTransform {
  transform(value: any, args?: any[]): Object[] {
    let kvs = [];

    value.forEach((entryVal, entryKey) => {
      kvs.push({key: entryKey, value: entryVal});
    });

    return kvs;
  }
}

