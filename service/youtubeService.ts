import ytdl from "ytdl-core";
import YtbResponse from "../interfaces/youtube.interface";

const getUrlsFromSearch  = (url:string) => {
    return ytdl.getInfo(url);
}

const verifiyValidURL = async (url:string) => {
    return await ytdl.validateURL(url);
}

const proccessResponse = async (url:string ) => {
    let formats  = (await parseFormats(url));

    let responseURLS = fillDataForResponse( formats);
    console.log(`Response: ${responseURLS}`);
    return responseURLS;
}
const parseFormats = async(url:string) => {
    let formatsFromSearch = (await ytdl.getInfo(url)).formats;  
      
    return formatsFromSearch;
}
const fillDataForResponse = (formats: ytdl.videoFormat[]) => {
    let responseFormats:Array<YtbResponse> = [];

   
    formats.map(format => {
        let  yet: YtbResponse = {
            itag:format.itag,
            mime:format.mimeType,
            quality:format.quality,
            fps:format.fps,
            qualityLabel:format.qualityLabel,
            aproxDuration:format.approxDurationMs,
            urlDownload:format.url,
            thumbnail:""
        };
        responseFormats.push(yet)
    })
    return responseFormats;
}

export {
    verifiyValidURL,
    proccessResponse
}

