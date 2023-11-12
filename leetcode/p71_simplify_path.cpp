class Solution {
public:
    string simplifyPath(string path) {
        std::string item;
        std::stack<string> myStack;
        // convert path to a string stream, and split it by the delimiter '/'.
        stringstream ss(path);
        while(getline(ss, item, '/')){
            if(item == ".."){
                if(!myStack.empty()){
                    myStack.pop();
                }
            }else if(item != "." && item != ""){
                // we only push valid items into the stack
                myStack.push(item);
            }
        }
        // since we were given an absolute path, which starts with a slash, if at this moment the stack is empty, it means either we didn't push anything into the stack, or everything is popped out.
        if(myStack.empty()){
            return "/";
        }
        std::string result = "";
        // now let's concatenate all valid items.
        while(!myStack.empty()){
            result = "/" + myStack.top() + result;
            myStack.pop();
        }
        return result;
    }
};
