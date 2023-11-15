import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QrDataService {
  private scannedResult: string[] = [];

  addScannedResult(result: string): void {
    this.scannedResult.push(result);
  }

  getScannedResult(): string[] {
    return this.scannedResult;
  }
}
