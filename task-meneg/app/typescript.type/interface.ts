export interface ITodo {
    title: string;
    done: boolean;
    description: string;
    ddLine: Date;
    adress: string;
}

export type State = { // new task //check
    errors?: {
      title?: string[];
      done?: string[];
      description?: string[];
      ddLine?: string[];
      adress?: string[];
    };
    message?: string | null;
  };



// export interface Itask {
//     title: string;
//     done: boolean;
//     description: string;
//     ddLine: Date; // Date
//     adress: string;
//     _id: unknown;
//     __v: number;
//     createdAt: Date;
//     updatedAt: Date;
//   }