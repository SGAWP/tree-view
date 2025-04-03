import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { DataI } from './interfaces/data.interface';
import { DataService } from './services/data.service';
import { AsyncPipe } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { MarkDeletedPipe } from './pipes/mark-deleted.pipe';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, TreeViewComponent, MarkDeletedPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data$: Observable<DataI> = EMPTY;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.data$ = this.dataService.getData();
  }
}
