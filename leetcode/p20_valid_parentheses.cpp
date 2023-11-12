class Solution {
public:
    bool isValid(string s) {
        std::stack<char> myStack;
        int len = s.length();
        char c;
        for(int i=0;i<len;i++){
            // push all the open brackets into the stack
            if(s[i]=='(' || s[i]=='{' || s[i]=='['){
                myStack.push(s[i]);
            }else{
                // if we encounter a close bracket first, it's already invalid.
                if(myStack.empty()){
                    return false;
                }
                c = myStack.top();
                myStack.pop();
                // for every close bracket we encounter, there must be a corresponding open bracket at the top of the stack.
                if(s[i]==')' && c!='('){
                    return false;
                }
                if(s[i]=='}' && c!='{'){
                    return false;
                }
                if(s[i]==']' && c!='['){
                    return false;
                }
            }
        }
        // if it's empty, we are good.
        if(myStack.empty()){
            return true;
        }else{
            return false;
        }
    }
};
