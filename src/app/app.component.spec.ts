import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TableComponent} from "./table/table.component";
import {MaterialModule} from "./material/material.module";
import {GridComponent} from "./grid/grid.component";
import {HtmlTableComponent} from "./html-table/html-table.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        AppComponent,
        TableComponent,
        GridComponent,
        HtmlTableComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-material-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-material-example');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-material-example app is running!');
  });
});
