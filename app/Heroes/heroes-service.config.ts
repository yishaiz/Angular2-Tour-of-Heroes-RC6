// let inMemoryApiUrl: string = 'app/heroes';
// let iisApiUrl: string = 'http://localhost:49520/api/heroes';
// let nodeApiUrl: string = 'http://localhost:6060/api/heroes';
import { Response } from "@angular/http";

let environmentsUrls = {
  'inMemoryApiUrl': 'app/heroes',
  'iisApiUrl': 'http://localhost:49520/api/heroes',
  'nodeApiUrl': 'http://localhost:6060/api/heroes'
}

enum environments{
  inMemory = 1,
  iis = 2,
  node = 3
}

function getHeroUrl(environment: environments): string {
  switch (environment) {
    case environments.inMemory: {
      return environmentsUrls.inMemoryApiUrl;
    }
    case environments.iis: {
      return environmentsUrls.iisApiUrl;
    }
    case environments.node: {
      return environmentsUrls.nodeApiUrl;
    }
    default: {
      debugger;
      throw 'not valid envirnoment configuration';
    }
  }
};

// let getObjectFromResponse = function (environment: environments, response : Response) {
function getObjectFromResponse(environment: environments, response: any) {
  switch (environment) {

    case environments.inMemory:
    case environments.node: {
      return response.json().data;
    }

    case environments.iis: {
      return JSON.parse(response._body);
    }

    default: {
      debugger;
      throw 'not valid envirnoment configuration';
    }
  }
};

function getSelectedEnvironment() {
  return selectedEnvironment;
}

let selectedEnvironment: environments;

// selectedEnvironment = environments.inMemory;
selectedEnvironment = environments.iis;
// selectedEnvironment = environments.node;


export   {
  getSelectedEnvironment,
  getHeroUrl,
  getObjectFromResponse
}

// iisApiUrl;
