import {User} from "./user";
import {Image} from "./image";

export interface Post {
  id?: any;
  user?: User;
  createAt?: string;
  content?: string;
  imageList?: Image[];
  status?: string;
}
