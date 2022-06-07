import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const courseResourceOptions: ResourceOptions = {
   navigation: 'Catálogo',
   editProperties: ['name', 'synopsis', 'uploadThumbnail', 'feature', 'categoryId'],
   filterProperties: ['name', 'synopsis', 'feature', 'categoryId', 'createdAt', 'updatedAt'],
   listProperties: ['id', 'name', 'feature', 'categoryId'],
   showProperties: ['id', 'name', 'synopsis', 'feature', 'thumbnailUrl', 'categoryId', 'createdAt', 'updatedAt']
}  

export const courseResourceFeatures: FeatureType[] = [
   uploadFileFeature({
      provider: {
         local: {
            bucket: path.join(__dirname, '..', '..', '..', 'public')
         }
      },
      properties: {
         key: 'thumbnailUrl',
         file: 'uploadThumbnail'
      },
      uploadPath: (record, filename) => `thumbnails/course-${record.get('id')}/${filename}`
   })
]