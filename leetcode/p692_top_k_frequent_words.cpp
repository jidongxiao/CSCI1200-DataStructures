class cmp{
public:
    // this is how we overload the function call operator, and this has to a public method.
    bool operator() (std::pair<string,int> p1, std::pair<string,int> p2){
        if(p1.second==p2.second){
            // lexicographical order
            return (p1.first < p2.first);
        }else{
            // sort this way would make sure the top of the heap is the string with the lowest frequency.
            return (p1.second > p2.second);
        }
    }
};

class Solution {
public:
    vector<string> topKFrequent(vector<string>& words, int k) {
        int size = words.size();
        // map words to frequency
        unordered_map<string, int> u_map1;
        vector<string> v1;
        // establish the map
        for(int i=0;i<size;i++){
            u_map1[words[i]]++;
        }
        // define a priority queue (MAX heap) with a custom comparison function
        priority_queue<pair<string, int>,vector<pair<string,int>>,cmp> pq;
        // traverse the map so as to establish the priority queue.
        unordered_map<string, int>::iterator itr;
        itr = u_map1.begin();
        while(itr != u_map1.end()){
            // push each pair into u_map1.
            pq.push(*itr);
            if(pq.size()>k){
                // evict the string with the lowest frequency?
                pq.pop();
            }
            itr++;
        }
        // after the above for loop, pq will have a size of k, and contains the strings with the highest frequency.
        // now just move these strings into v1.
        for(int i=0;i<k;i++){
            // we have to use top() here, beause pop() won't return anything.
            v1.push_back((pq.top()).first);
            pq.pop();
        }
        std:reverse(v1.begin(),v1.end());
        return v1;
    }
};
