import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events
     .pipe(filter(event => event instanceof NavigationEnd))
     .subscribe(() => {
       const root = this.router.routerState.snapshot.root;
       const breadcrumbs: Breadcrumb[] = [];
       this.addBreadcrumb(root, [], breadcrumbs);
       this._breadcrumbs$.next(breadcrumbs);
     });
     this.router.events
       .pipe(filter(event => event instanceof NavigationEnd))
       .subscribe(() => this.buildBreadcrumbs());
     this.buildBreadcrumbs();
  }

  private buildBreadcrumbs() {
    const root = this.router.routerState.snapshot.root;
    const breadcrumbs: Breadcrumb[] = [];
    this.addBreadcrumb(root, [], breadcrumbs);
    this._breadcrumbs$.next(breadcrumbs);
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((u) => u.path));
      if (route.data['breadcrumb']) {
      route.data['breadcrumb'].map((item: Breadcrumb) => {
        breadcrumbs.push({
          label: item.label,
          url: '/' + item.url
        });
      });
      }
      if (route.firstChild) {
        this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
      }
    }
  }
}
