import { Component, Input } from '@angular/core';
import { TreeNodeI } from '../interfaces/data.interface';

@Component({
  selector: 'app-tree-view',
  imports: [],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss'
})
export class TreeViewComponent {
  @Input() treeData?: TreeNodeI[] = [];

  toggleNode(node: TreeNodeI): void {
    node.expanded = !node.expanded;
  }
}
