// sort a vector (which only has two elements) based on the first element
bool operator<(vector<int> &A, vector<int> &B){
    if(A[0]<B[0]){
        return true;
    }else{
        return false;
    }
}

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if(intervals.empty()){
            return {};
        }

        std::sort(intervals.begin(), intervals.end());
        vector<vector<int>> result;
        int size = intervals.size();
        // traverse the vector
        for(int i=0;i<size;i++){
            // we use back() to access a vector's last element
            // if result is empty,
            // or if the current result does not have any overlap with the interval we are currently visiting, and push back this currently visited interval
            if(result.empty() || intervals[i][0] > (result.back())[1]){
                result.push_back(intervals[i]);
            }else{
                // if there is an overlap, then update the last element's second element, if it's smaller than the second element of the currently visited interval.
                if((result.back())[1] < intervals[i][1]){
                    (result.back())[1] = intervals[i][1];   
                }
            }
        }
        return result;
    }
};
