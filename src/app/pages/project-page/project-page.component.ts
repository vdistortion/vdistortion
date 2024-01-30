import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { ProjectDetailComponent } from '../../components/project/project-detail/project-detail.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [PageComponent, ProjectDetailComponent],
  templateUrl: './project-page.component.html',
})
export class ProjectPageComponent {}
