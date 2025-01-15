export interface ITodo {
  title: string;
  done: boolean;
  description: string;
  ddLine: Date;
  adress: string;
}

export type State = {
  errors?: {
    title?: string[];
    // done?: string[]; // we don't have done in the form 
    description?: string[];
    ddLine?: string[];
    adress?: string[];
  };
  message?: string | null;
};


export interface Itask {
  title: string;
  done: boolean;
  description: string;
  ddLine: Date; // Date
  adress: string;
  _id: unknown;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPageEdit {
  params: { taskId: string }
}