import { ResourceWithOptions } from "adminjs";
import { Category, Course } from  "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./courses";

export const adminJsResources: ResourceWithOptions[] = [
 
   {
      resource: Category,
      options: categoryResourceOptions
   },
   {
      resource: Course,
      options: courseResourceOptions
   }

]