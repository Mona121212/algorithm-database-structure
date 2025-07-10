var simplifyPath = function(path) {
    let stack = [];
    let components = path.split("/");

    for(const component of component) {
        if(component === "" || component === ".") continue;

        if(component === "..") {
            if(stack.length) {
                stack.pop();
            }
        } else {
            stack.push(component);
        }
        
    }
    return "/" + stack.join("/")
}