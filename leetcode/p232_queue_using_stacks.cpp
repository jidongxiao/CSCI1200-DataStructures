// leetcode 232: implementing queues using stacks

class MyQueue {
public:
    MyQueue() {
        
    }
    
    // push 1
    // push 2
    // peek
    void push(int x) {
        int size = stack1.size();
        // move every element in stack1 into stack2
        for(int i=0;i<size;i++){
            stack2.push(stack1.top());
            stack1.pop();
        }
        stack1.push(x);
        // move every element in stack2 into stack1
        for(int i=0;i<size;i++){
            stack1.push(stack2.top());
            stack2.pop();
        }
    }
    
    int pop() {
        int x = stack1.top();
        stack1.pop();
        return x;
    }
    
    int peek() {
        return stack1.top();
    }
    
    bool empty() {
        return stack1.empty();
    }
private:
    std::stack<int> stack1;
    std::stack<int> stack2;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
