import helloWorld from '../hello-world';

export const hello = (): string => 'hello';

export default function process(request: any, response: any): void {
    hello();
    response.setBody({ data: request.body.data, helloWorld: helloWorld(), hello: hello() });
}
