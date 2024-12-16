import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
  currentDate = new Date();
  userAgent = navigator.userAgent;
  languages = navigator.languages;
  cookie = navigator.cookieEnabled;
  logical = navigator.hardwareConcurrency;
  touch = navigator.maxTouchPoints

}
