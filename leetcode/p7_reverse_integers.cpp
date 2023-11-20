// leetcode problem 7: reverse integer

class Solution {
public:
    int reverse(int x) {
        int sign=1;
        if(x<0){
            sign = -1;
        }
        long result = 0;
        x = abs(x);
        // convert x to a string and reverse it
        string s = to_string(x);
        std::reverse(s.begin(),s.end());
        try{
            result = stoi(s);
        }catch(const std::out_of_range& e){
            cout<<"Error: "<<e.what()<<": out of range"<<endl;
            return 0;
        }
        result = sign * result;
        return result;
    }
};
