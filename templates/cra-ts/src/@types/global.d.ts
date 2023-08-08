declare interface Window {
    CacheManager: CacheManager;
    localforage: LocalForage;
    messages: object;
    $j: object;
    jQuery: function;
    findObj: function;
    clarity?: function;
}

// Just a generic way to type a function
// e.g. const someFunction: Callable<[string, number], string> = (x: string, y: number): string => { ... };
type Callable<A = unknown[], B = unknown> = (...args: A extends unknown[] ? A : [A]) => B;
