import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorProviderDirective} from "./error-provider.directive";
import {FormControlProviderDirective} from "./form-control-provider.directive";
import {FormFieldErrorHandlerDirective} from "./form-field-error-handler.directive";


@NgModule({
  declarations: [ErrorProviderDirective, FormControlProviderDirective, FormFieldErrorHandlerDirective],
  imports: [
    CommonModule
  ],
  exports: [ErrorProviderDirective, FormControlProviderDirective, FormFieldErrorHandlerDirective],
})
export class FormControlErrorModule {
}
