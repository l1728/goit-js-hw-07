class StringBuilder {
    #value;
    constructor(initialValue = "") {
        this.#value = initialValue.toString();
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str.toString();
    }
    padStart(str) {
        this.#value = str.toString() + this.#value;
    }
    padBoth(str) {
        this.#value = str.toString() + this.#value + str.toString();
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
