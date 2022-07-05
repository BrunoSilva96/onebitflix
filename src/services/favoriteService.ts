import { Favorite } from "../models"

export const FavoriteService = {
   create: async (userId: number, courseId: number) => {
      const favorite = Favorite.create({
         courseId,
         userId
      })

      return favorite
   }
}