export interface ITask {
  id: string;
  title: string;
  content: string;
}

export interface IList {
  title: string;
  content: string[];
  category: string;
  link?: string;
  complete?: boolean;
}
