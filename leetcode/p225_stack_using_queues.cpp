class MyStack {
public:
    MyStack() {
        
    }
    
    void push(int x) {
        que.push(x);
        int size = que.size();
        for(int i=0;i<size-1;i++){
            que.push(que.front());
            que.pop();
        }
    }
    
    int pop() {
        int x = que.front();
        que.pop();
        return x;
    }
    
    int top() {
        return que.front();
    }
    
    bool empty() {
        return que.empty();
    }
private:
    std::queue<int> que;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
