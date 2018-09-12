
// Pretty print an object using JSON stringify and return an HTML string.
export function stringifyObject(o: object) {
    let str: string = "";

    if (typeof o !== "string") {
         str = JSON.stringify(o, undefined, 2);
    }

    str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return str.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
        let s: string = "number";

        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                s = "key";

            } else {
                s = "string";
            }

        } else if (/true|false/.test(match)) {
            s = "boolean";

        } else if (/null/.test(match)) {
            s = "null";
        }

        return "<span class='" + s + "'>" + match + "</span>";
    });
}
