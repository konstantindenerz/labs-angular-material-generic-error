import {Directive, ElementRef} from "@angular/core";
import {ErrorHandlerService} from "./error-handler.service";

@Directive({
  selector: 'mat-error'
})
export class ErrorProviderDirective {
  constructor(private readonly elementRef: ElementRef,
              private readonly errorHandlerService: ErrorHandlerService) {
  }

  show(errors: any): void {
    this.errorHandlerService.process(errors, this.elementRef.nativeElement);
  }
}
