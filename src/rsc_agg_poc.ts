import importedHello from './hello-world';

const internalHello = (): string => 'hello in here!';

export const exportedHello = (): string => 'hello out there!';

export default function process(request: any, response: any): void {
    response.setBody({
        data: request.body.data,
        internalHello: internalHello(),
        exportedHello: exportedHello(),
        importedHello: importedHello(),
    });
}

if ((global as any).request) {
    (process)((global as any).request, (global as any).response);
}
