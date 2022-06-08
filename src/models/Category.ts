import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"


export interface CategoryAttributes { 
   id: number
   name: string
   position: number
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> { }

export interface CategoryInstace extends Model<CategoryAttributes, CategoryCreationAttributes>, CategoryAttributes { }

export const Category = sequelize.define<CategoryInstace, CategoryAttributes>('Category', {
   id: {
      allowNull: false,
      autoIncrement: true, 
      primaryKey: true,
      type: DataTypes.INTEGER
   },
   name: {
      allowNull: false,
      type: DataTypes.STRING
   },
   position: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER
   }
})
