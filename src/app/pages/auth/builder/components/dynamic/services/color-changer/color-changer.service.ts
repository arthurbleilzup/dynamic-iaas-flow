import { DOCUMENT } from '@angular/common'
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorChangerService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public changeRootCssVarColor(varName: string, newColor: string) {
    const root = this.document.documentElement
    root.style.setProperty(varName, newColor)
  }
}
