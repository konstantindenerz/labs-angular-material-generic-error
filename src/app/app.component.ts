import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labs-angular-material-generic-error';
  formGroup: FormGroup;
  bar = new FormControl('', [Validators.required]);

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      foo: ['', [Validators.required]],
      bar: this.bar
    });
  }

}
