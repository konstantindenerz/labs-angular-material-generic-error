import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ErrorHandlerService {
  process(errors: any, errorContainer: HTMLElement): void {
    // TODO: translate and process errors or show overlay (cdk)
    errorContainer.innerText = errors.required ? 'The field is required' : JSON.stringify(errors);
  }
}
