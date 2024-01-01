import 'jquery';

declare global {
    interface JQueryStatic {
        _data(element: Element | Document | Window, name: string): any;
    }
}