function f(x) {
    alert(arguments.length);
    return arguments.length ? 1 : 0;
}

console.log(f());
