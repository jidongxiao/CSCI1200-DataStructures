class Node{
public:
    // default constructor
    Node(){
        url="";
        next=nullptr;
        prev=nullptr;
    }
    // another constructor
    Node(string s){
        url=s;
        next=nullptr;
        prev=nullptr;
    }
    std::string getURL(){
        return url;
    }
    Node* getNext(){
        return next;
    }
    Node* getPrev(){
        return prev;
    }
    void setNext(Node* p){
        next = p;
    }
    void setPrev(Node* p){
        prev = p;
    }
private:
    Node *next;
    Node *prev;
    std::string url;
};

void PushBack(Node* &head, Node* &tail, Node* &node){
    // edge case, when there is nothing in the linked list
    if(tail==nullptr){
        head = node;
        tail = node;
        return;
    }
    tail->setNext(node);
    node->setPrev(tail);
    tail = node;
}

void PopBack(Node* &head, Node* &tail){
    Node* temp = tail;
    tail = tail->getPrev();
    tail->setNext(nullptr);
    // delete the original tail
    delete temp;
}

class BrowserHistory {
public:
    BrowserHistory(string homepage) {
        current = new Node(homepage);
        head = tail = current;
    }
    
    void visit(string url) {
        Node* temp = new Node(url);
        // if current is not equal to tail, delete whatever is in between current and tail (including tail); because the requirement is "clears up all the forward history."
        while(current!=tail){
            PopBack(head, tail);
        }
        PushBack(head, tail, temp);
        current = tail;
    }
    
    string back(int steps) {
        if(head==nullptr){
            return "";
        }
        // go back "steps" steps
        for(int i=0;i<steps&&current!=head;i++){
            current = current->getPrev();
        }
        return current->getURL();
    }
    
    string forward(int steps) {
        if(head==nullptr){
            return "";
        }
        // go forward "steps" steps
        for(int i=0;i<steps&&current!=tail;i++){
            current = current->getNext();
        }
        return current->getURL();
    }

private:
    Node* head;
    Node* tail;
    Node* current;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */
