import { Injectable, Pipe } from '@angular/core'

@Pipe({
  name: 'link'
})
@Injectable()
export class Link {

  transform (value) {
    return '#/' + value
  }

}
