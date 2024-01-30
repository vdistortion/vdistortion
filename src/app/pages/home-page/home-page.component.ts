import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { ProjectListComponent } from '../../components/project/project-list/project-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageComponent, ProjectListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
