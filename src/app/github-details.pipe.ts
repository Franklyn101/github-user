import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'githubDetails',
  standalone: true
})
export class GithubDetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
