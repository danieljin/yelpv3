"use strict";

var request = require('request-promise');

const baseUrl = 'https://api.yelp.com/v3/';

class Yelpv3 {

    constructor(opts) {
        this.api_key = opts.api_key;
    }

    get(resource, params) {
        params = (typeof params === 'undefined') ? {} : params;

        return request({
                uri: baseUrl + resource + jsonToQueryString(params),
                headers: {
                    'Authorization': 'Bearer ' + this.api_key
                }
            }).then((response) => {
                return response;
            }).catch((err) => {
                throw err;
            });
    }

    search(params) {
        return this.get('businesses/search', params);
    }

    phoneSearch(params) {
        return this.get('businesses/search/phone', params);
    }

    transactionSearch(transactionType, params) {
        return this.get(`transactions/${transactionType}/search`, params);
    }

    business(id) {
        return this.get(`businesses/${id}`, undefined);
    }

    reviews(id) {
        return this.get(`businesses/${id}/reviews`, undefined);
    }

    autocomplete(params) {
        return this.get('autocomplete', params);
    }
}

function jsonToQueryString(json) {
    return '?' +
        Object.keys(json).map(function(key) {
            if (key === 'price') {
                return key + '=' + json[key];
            } else {
                return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
            }
        }).join('&');
}

module.exports = Yelpv3;
