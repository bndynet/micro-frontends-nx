import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'mfe-nx-welcome',
  template: `<mfe-welcome
    title="{{ title }}"
    bg="#3687f0"
    [hideContent]="true"
  ></mfe-welcome>`,
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent implements OnInit {
  public title = 'Document';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.title = e.url;
      });
  }
}
