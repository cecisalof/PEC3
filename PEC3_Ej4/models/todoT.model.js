/**
 * @class Todo
 *
 * Manages the data of the application.
 */
var TodoT = /** @class */ (function () {
    // text is a required string, and complete is an optional boolean.
    function TodoT(_a) {
        var _b = _a === void 0 ? { text: '', complete: false } : _a, text = _b.text, complete = _b.complete;
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    // uuidv4(): string {
    //     return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
    //         (
    //             c ^
    //             (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    //         ).toString(16)
    //     );
    // }
    //In this version, I replaced the logic for generating a UUID with a more standard method using the 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' format. This should resolve the issue you were facing.
    TodoT.prototype.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    return TodoT;
}());
