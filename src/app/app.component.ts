import { Component, AfterViewInit } from '@angular/core';

declare const $: JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    $('#spreadsheet').kendoSpreadsheet();
  }

  public downloadSpreadsheet(): void {
    $('#spreadsheet').data('kendoSpreadsheet').saveAsExcel();
  }
}
