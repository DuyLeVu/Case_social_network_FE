import firebase from "firebase/compat";
import {User} from "./user";


export interface Image {
  id?: string;
  linkImage?:string;
  user?:User;
}
