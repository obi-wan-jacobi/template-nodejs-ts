import IRESTAPIResponse from '../../src/servicenow/interfaces/IRESTAPIResponse';

// tslint:disable-next-line: max-line-length
// https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/ScriptableServiceResponseBuilder/concept/c_ScriptableServiceResponseBuilder.html
export default class RESTAPIResponse implements IRESTAPIResponse {

    private __body: any;

    public get body(): any {
        return this.__body;
    }

    public setBody(body: any): void {
        this.__body = body;
    }

    public toResult(): any {
        return { result: this.__body };
    }
}
