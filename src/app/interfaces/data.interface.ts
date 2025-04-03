export interface DataI {
  data: TreeNodeI[];
}

export interface TreeNodeI {
  id: number;
  title: string;
  is_deleted: boolean;
  children?: TreeNodeI[];
  expanded: boolean;
}