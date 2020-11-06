import IRESTAPIRequest from '../../src/servicenow/interfaces/IRESTAPIRequest';

// tslint:disable-next-line: max-line-length
// https://docs.servicenow.com/bundle/paris-application-development/page/app-store/dev_portal/API_reference/ScriptableServiceRequest/concept/c_ScriptableServiceRequest.html
export default class RESTAPIRequest implements IRESTAPIRequest {

    public body: { data: any };

    public constructor(data: any) {
        this.body = { data };
    }
}
