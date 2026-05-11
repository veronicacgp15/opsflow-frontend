import {
  Directive,
  effect,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Directive({
  selector: '[hasPermission]',
  standalone: true
})
export class HasPermissionDirective {
  private readonly tpl = inject(TemplateRef<unknown>);
  private readonly vcr = inject(ViewContainerRef);
  private readonly auth = inject(AuthService);

  private required: string[] = [];
  private rendered = false;

  constructor() {
  
    effect(() => {
    
      this.auth.permissions();
      this.update();
    });
  }

  @Input() set hasPermission(value: string | readonly string[] | null | undefined) {
    if (value == null) {
      this.required = [];
    } else if (typeof value === 'string') {
      this.required = [value];
    } else {
      this.required = [...value];
    }
    this.update();
  }

  private update(): void {
    const allowed =
      this.required.length === 0 || this.auth.hasAnyPermission(this.required);

    if (allowed && !this.rendered) {
      this.vcr.createEmbeddedView(this.tpl);
      this.rendered = true;
    } else if (!allowed && this.rendered) {
      this.vcr.clear();
      this.rendered = false;
    }
  }
}
