import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'multiPipe' })
export class MultiNumber implements PipeTransform {
  transform(value: number, args: any[]): number {
    return value * value;
  }
}
