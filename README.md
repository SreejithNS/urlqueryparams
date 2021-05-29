
# URLQueryParams ![ts](https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/SreejithNS/urlqueryparams/blob/main/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/Naereen/StrapDown.js.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/SreejithNS/urlqueryparams/stargazers/)


An extended version of [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) with support for Objects and Arrays.

**URLQueryParams** implements URLSearchParams interface, so that it can be replaced with URLSearchParams for query string manipulation.


## Features

- Can be used with [Express.js](https://www.npmjs.com/package/express) which accepts Arrays and Objects in query parameters.
- It doesn't pollute the Global namespace as it's a separate Class.
- ✨Built in **Typescript** Definitions✨

## 🔰 Setup

### Install

    npm -i -s url-query-params
    
	(or)
	
	yarn add url-query-params

### Usage

    
    import { URLQueryParams } from "url-query-params";
    
    const queryParams = new URLQueryParams(
        {
            name: "John",
            age: 12,
            score: [52,16,23],
            tags: ["sports","fitness"],
            sort: {
                createdAt : "asc",
                updatedAt : -1
            }
        }
    )
    
    console.log(decodeURIComponent(queryParams.toString()))
    /**
     * Output:
     *  "name=John&age=12&score[]=52&score[]=16&score[]=23&tags[]=sports&tags[]=fitness&sort[createdAt]=asc&sort[updatedAt]=desc" 
     */



## Documentation

**URLQueryParams** implements [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) interface, where the constructor accepts a few more signatures than URLSearchParams:

#### ✅ Unsupported Signatures

 - `{ [param]: string | number }`
 - `{ [param]: string[] | number[] }`
 - `{  [param]: { [param]: string | number } }`
 - And all other signatures that are supported by [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

#### ❎ Unsupported Signatures
 
 - Arrays within Nested Objects are not supported.
	 - `{  [param]: { [param]: string[] | number[] } }`  
 - Double nested Objects are not supported.
	 -  `{  [param]: { [param]: {...} } }` 

## 🦄 Contribution & Issues
[![GitHub stars](https://img.shields.io/github/stars/Naereen/StrapDown.js.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/SreejithNS/urlqueryparams/stargazers/) [![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://GitHub.com/SreejithNS/urlqueryparams/issues/) [![GitHub pull-requests](https://img.shields.io/github/issues-pr/Naereen/StrapDown.js.svg)](https://GitHub.com/SreejithNS/urlqueryparams/pull/)
If this package helped you and saved your time **thank me by giving a star ⭐** to my repo. 
Post your issues [here](https://github.com/SreejithNS/urlqueryparams/issues)
Pull Requests are always welcomed.

## License
[MIT License](https://github.com/SreejithNS/urlqueryparams/blob/main/LICENSE)

Copyright (c) 2021 Sreejith N Subramanian
