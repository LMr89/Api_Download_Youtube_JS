import ytdl from "ytdl-core";
import YoutubeDetails from "../interfaces/main/youtubeDetails.interface";
import YtbResponse from "../interfaces/main/youtubeFormats.interface";

const getUrlsFromSearch  = (url:string) => {
    return ytdl.getInfo(url);
}

const verifiyValidURL = async (url:string) => {
    return ytdl.validateURL(url);
}

const proccessResponse = async (url:string ) => {
    let formats  = (await parseFormats(url));
    let details = (await parseYoutubeDetails(url));

    let responseURLS = fillDataForResponse( formats, details);
    //console.log(`Response: ${responseURLS}`);
    return responseURLS;
}


const parseFormats = async(url:string) => {
    let formatsFromSearch = (await ytdl.getInfo(url)).formats;  
      
    return formatsFromSearch;
}

const parseYoutubeDetails = async(url:string) => {
    let details = (await ytdl.getInfo(url)).videoDetails;
    return details;
}


const fillDataForResponse = (formats: ytdl.videoFormat[], 
                details:ytdl.MoreVideoDetails) => {

    let youtubeResponse:YoutubeDetails = {
        title:details.title,
        description : details.description,
        lengthSeconds:details.lengthSeconds,
        views : details.viewCount,
        author: details.author.name,
        thumbnail:details.thumbnails.pop(),
        formats:undefined

    }


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
          
        };
        responseFormats.push(yet)
    })

    youtubeResponse.formats = responseFormats;
    return youtubeResponse;
}

export {
    verifiyValidURL,
    proccessResponse
}

