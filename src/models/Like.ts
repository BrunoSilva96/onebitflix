import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface LikesAttributes {
   userId: number
   courseId: number
}

export interface LikesInstance extends Model<LikesAttributes>, LikesAttributes {}

export const Like = sequelize.define<LikesInstance, LikesAttributes>('Like', {
   userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { 
         model: 'users', 
         key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    courseId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { 
         model: 'courses', 
         key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  })
