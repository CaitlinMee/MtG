//https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64

// Angular Modules
import { Injectable } from '@angular/core';
// Application Classes
import { UrlBuilder } from '../../shared/classes/url-builder';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';
// Application Constants
import { Constants } from '../../Config/constants';

@Injectable()
export class ApiEndpointService {

    constructor(
        // Application Constants
        private constants: Constants
    ) {}

    /* #region URL CREATOR */
    // URL
    private createUrl(
        action: string,
        isMockApi: boolean = false
    ) : string {
        const urlBuilder: UrlBuilder = new UrlBuilder(
            isMockApi ? this.constants.API_MOCK_ENDPOINT :
            this.constants.API_ENDPOINT,
            action
        );
        return urlBuilder.toString();
    }

    // URL WITH QUERY PARAMS
    private createUrlWithQueryParameters(
        action: string,
        queryStringHandler?:
            (QueryStringParameters: QueryStringParameters) => void
    ): string {
        const urlBuilder: UrlBuilder = new UrlBuilder (
            this.constants.API_ENDPOINT,
            action
        );
        // push extra query string params
        if (queryStringHandler) {
            queryStringHandler(urlBuilder.queryString);
        }
        return urlBuilder.toString();
    }

    // URL WITH PATH VARIABLES
    private createUrlWithPathVariables(
        action: string,
        pathVariables: any[] = []
    ): string {
        let encodedPathVariablesUrl: string = '';
        // Push extra path variables
        for (const pathVariable of pathVariables) {
            if (pathVariables !== null) {
                encodedPathVariablesUrl +=
                    '/${encodedURIComponent(pathVariable.toString())}';
            }
        }
        const urlBuilder: UrlBuilder = new UrlBuilder(
            this.constants.API_ENDPOINT,
            '${action}${encodedPathVariablesURL}'
        );
        return urlBuilder.toString();
    }
    /* #endregion */
}