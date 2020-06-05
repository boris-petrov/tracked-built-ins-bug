import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from 'tracked-built-ins';

export default class extends Component {
  x = tracked({});

  @action
  toggle() {
    if ('a' in this.x) {
      delete this.x.a;
    } else {
      this.x.a = 1;
    }
  }
}
