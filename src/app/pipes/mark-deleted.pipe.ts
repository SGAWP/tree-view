import { Pipe, PipeTransform } from '@angular/core';
import { TreeNodeI } from '../interfaces/data.interface';

@Pipe({
  name: 'markDeleted'
})
export class MarkDeletedPipe implements PipeTransform {
  transform(nodes: TreeNodeI[]): TreeNodeI[] {
    return this.markDeletedNodes(nodes);
  }

  private markDeletedNodes(nodes: TreeNodeI[], parentDeleted = false): TreeNodeI[] {
    return nodes.map(node => ({
      ...node,
      is_deleted: parentDeleted || node.is_deleted,
      children: node.children ? this.markDeletedNodes(node.children, parentDeleted || node.is_deleted) : []
    }));
  }
}