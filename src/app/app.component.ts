import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OpmetData, OpmetResponse } from './opmet-interface';
import { OpmetLoaderService } from './services/opmet-loader/opmet-loader.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading = false;
  responseData$?: Observable<OpmetResponse>;

  constructor(private service: OpmetLoaderService) {}

  loadData(data: OpmetData): void {
    this.loading = true;
    this.responseData$ = this.service.getOpmetData(data);
    this.responseData$.pipe(take(1)).subscribe({
      complete: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        // TODO show nice error, also consult with BE all possible errors
      },
    });
  }
}
