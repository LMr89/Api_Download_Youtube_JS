import { Author, MoreVideoDetails, thumbnail } from "ytdl-core"
import YtbResponse from "./youtubeFormats.interface"


export default interface YoutubeDetails{
    title:string,
    description: string | null,
    lengthSeconds:string,
    views:string,
    author:string |Author,
    thumbnail:thumbnail |undefined,
    formats:Array<YtbResponse>  |undefined
}