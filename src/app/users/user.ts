import { Role } from "./role";

export interface User {
  nome?: string;
  matricula?: string;
  roles?: Role[];
}
