import { Injectable, Pipe } from '@angular/core'

@Pipe({
  name: 'timestamp'
})
@Injectable()
export class Timestamp {

  transform (value) {
    return Date.parse(value.replace(/-/g, '/'))
  }

}
