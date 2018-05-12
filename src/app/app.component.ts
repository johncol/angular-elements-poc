import { Component, Injector, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { createCustomElement, NgElementConstructor } from '@angular/elements';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dynamicHtmlContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private injector: Injector) {
    this.registerWebComponent();
  }

  ngOnInit(): void {
    this.setDynamicHtmlContentToAlertWebComponent();
  }

  private registerWebComponent(): void {
    const AlertElement: NgElementConstructor<any> = createCustomElement(AlertComponent, { injector: this.injector });
    customElements.define('app-native-alert', AlertElement);
  }

  private setDynamicHtmlContentToAlertWebComponent(): void {
    const html: string = '<app-native-alert message="Angular Element (dynamically injected)"></app-native-alert>';
    this.dynamicHtmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
