class Solution {
public:
    int firstUniqChar(string s) {
        int len = s.length();
        std::unordered_map<char, int> map1;
        // traverse the string and count the frequence of each character.
        for(int i=0;i<len;i++){
            map1[s[i]]++;
        }
	// push all characters in a queue.
        std::queue<char> myQueue;
        for(int i=0;i<len;i++){
            myQueue.push(s[i]);
        }
        int index = 0;
        while(!myQueue.empty()){
		// if frequency is larger than 1, it's not what we want.
            if(map1[myQueue.front()]>1){
                myQueue.pop();
                index++;
            }else{
                // found the non-repeating character
                break;
            }
        }
        // if not found, return -1.
        if(index>=len){
            return -1;
        }
        return index;
    }
};
