import { Response } from "express";
import fs from "fs";
import path from "path";

export const episodeService = {
   streamEpisodeToResponse: (res: Response, videoUrl: string, range: string | undefined) => {
      const filePath = path.join(__dirname, '..', '..', 'uploads', videoUrl)
      const fileStat = fs.statSync(filePath)

      const range = req.headers.range //FORMATO DO RANGE -> bytes=0-1024

      if (range) {
         const parts = range.replace(/bytes=/, '').split('-')

         const start = parseInt(parts[0], 10) //ex 1024
         const end = parts[1] ? parseInt(parts[1], 10) : fileStat.size - 1 //ex 8196

         const chunkSize = (end - start) + 1

         const file = fs.createReadStream(filePath, { start, end })

         const head = { 
            'Content-Range': `bytes ${start}-${end}/${fileStat.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4'
         }

         res.writeHead(206, head)

         file.pipe(res)
      } else {
         const head = { 
            
            'Content-Length': fileStat.size,
            'Content-Type': 'video/mp4'
         }

         res.writeHead(200, head)

         fs.createReadStream(filePath).pipe(res)
      }
   }
}