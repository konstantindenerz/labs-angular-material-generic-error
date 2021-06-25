import {Directive, HostListener, Optional} from "@angular/core";
import {AbstractControl, FormControlDirective, FormControlName} from "@angular/forms";
import {Subject} from "rxjs";

@Directive({
  selector: '[formControlName], [formControl]'
})
export class FormControlProviderDirective {
  public readonly blur$$ = new Subject<void>();

  constructor(@Optional() private readonly formControlName: FormControlName,
              @Optional() private readonly formControlDirective: FormControlDirective) {
  }

  get control(): AbstractControl {
    return (this.formControlName || this.formControlDirective).control;
  }


  @HostListener('blur')
  blur(): void {
    this.blur$$.next();
  }
}
