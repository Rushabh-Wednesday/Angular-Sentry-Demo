import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
    //
  }
   handleError(error: any) {
    console.log('******************************');
    Sentry.captureException('something went wrong');
    //throw err
  }
}

export function getErrorHandler(): ErrorHandler {
  console.log('I am here');
  return new SentryErrorHandler();
}
