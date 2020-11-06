import helloWorld from 'src/hello-world';

export default function process(request: any, response: any): void {
    response.setBody(request.body.data);
}
