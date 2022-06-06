import { ResourceOptions } from "adminjs";

export const courseResourceOptions: ResourceOptions = {
   navigation: 'Catálogo',
   editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'categoryId'],
   filterProperties: ['name', 'synopsis', 'feature', 'categoryId', 'createdAt', 'updatedAt'],
   listProperties: ['id', 'name', 'feature', 'categoryId'],
   showProperties: ['id', 'name', 'synopsis', 'feature', 'thumbnailUrl', 'categoryId', 'createdAt', 'updatedAt']
}