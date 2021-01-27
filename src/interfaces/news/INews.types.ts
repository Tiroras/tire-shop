export interface IPost {
  id: number;
  header: string,
  text: string,
  img: string
}

export interface IPosts {
  posts: IPost[];
}