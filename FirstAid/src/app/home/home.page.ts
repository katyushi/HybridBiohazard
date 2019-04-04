import { Component } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private globalization: Globalization) { }
  public getPrefLang() {
    this.globalization.getPreferredLanguage()
  .then(res => console.log(res))
  .catch(e => console.log(e));

  }

}
