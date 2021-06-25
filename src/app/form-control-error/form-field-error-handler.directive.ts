import {AfterViewInit, ContentChild, Directive, OnDestroy} from "@angular/core";
import {ErrorProviderDirective} from "./error-provider.directive";
import {FormControlProviderDirective} from "./form-control-provider.directive";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AbstractControl} from "@angular/forms";

@Directive({
  selector: 'mat-form-field'
})
export class FormFieldErrorHandlerDirective implements AfterViewInit, OnDestroy {
  @ContentChild(ErrorProviderDirective) error?: ErrorProviderDirective;
  @ContentChild(FormControlProviderDirective) controlProvider?: FormControlProviderDirective;
  readonly #destroy$$ = new Subject<void>();

  ngAfterViewInit(): void {
    if (this.controlProvider) {
      const control = this.controlProvider.control;
      control.statusChanges.pipe(takeUntil(this.#destroy$$)).subscribe(() => {
        this.handleErrors(control);
      });
      this.controlProvider.blur$$.pipe(takeUntil(this.#destroy$$)).subscribe(() => {
        if (!control.dirty) {
          this.handleErrors(control);
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.#destroy$$.next();
  }

  handleErrors(control: AbstractControl): void {
    if (control && control.touched && this.error) {
      this.error.show(control.errors);
    }
  }
}
