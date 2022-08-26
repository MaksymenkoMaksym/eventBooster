import { refs } from './refs';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const source = 'events';
const API_KEY = '5HiPtCjBuAY9gthoMA0oQuJCLkmuGiMG';


const url = `${BASE_URL}${source}.json?apikey=${API_KEY}&keyword="spice"`;
// you can use
export async function fetchApiData() {
    const responce = await fetch(url);
    const data = await responce.json();
    // const eventsArray = data._embedded.events;
    // localStorage.setItem('event', JSON.stringify(data))
    // console.log(data._embedded.events);
    return data
}
// you can use


// in progress DONT touch
class EventApi {

    constructor() {
        this.country
    }

    setCountry(country) {
        this.country = country;
    };

    setEndPoint(endPoint) {
        config.url = endPoint;
    };

    setKeyword(keyword) {
        this.keyword = keyword;
    }
}

const config = {
    // `url` is the server URL that will be used for the request
    url: 'events',

    // `method` is the request method to be used when making the request
    method: 'get', // default

    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: 'https://some-domain.com/api/',

    // `headers` are custom headers to be sent
    headers: { 'X-Requested-With': 'XMLHttpRequest' },

    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    // NOTE: params that are null or undefined are not rendered in the URL.
    params: {
        apikey: API_KEY, //key for request
        size: 16, //Page size of the response
        number: 0, //number of page
        countryCode: '', //Filter by country code
        keyword: '', //Keyword to search on
        includeTBD: '', //yes, to include with a date to be defined (TBD)
        includeTBA: '', //
        preferredCountry: [], //Popularity boost by country, default is us ["us", " ca"]

    },


    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 1000, // default is `0` (no timeout)

    // `responseType` indicates the type of data that the server will respond with
    // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
    //   browser only: 'blob'
    responseType: 'json', // default
}

// const res = localStorage.getItem('event');
// console.log(JSON.parse(res)._embedded.events);

// in progress DONT touch
