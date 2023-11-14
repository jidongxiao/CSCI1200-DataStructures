class cmp {
public:
    // overloading the function call operator
    bool operator()(pair<int,pair<int,int>> p1, pair<int,pair<int,int>> p2){
        return p1.first < p2.first;
    }
};

class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        int size1 = nums1.size();
        int size2 = nums2.size();
        vector<vector<int> > ans;
        priority_queue<pair<int,pair<int,int>>,vector<pair<int,pair<int,int>>>,cmp> pq;
        for(int i=0; i<size1; i++){
            for(int j=0; j<size2; j++){
                int sum=nums1[i]+nums2[j];
                
                if(pq.size()<k){
                    pq.push( {sum , {nums1[i] , nums2[j]} } );
                }
                // sum is smaller than the sum stored at top(), which is the max in the heap, then let that max go;
                else if(sum < pq.top().first){
                    pq.pop();
                    pq.push( {sum , {nums1[i] , nums2[j]} } );
                }else{
                    // else means, we have k elements in the heap, and sum is larger than the max; then all remaining indices (in this current row) would just generate larger sums. 
                    // so this break is not breaking out of the entire nested loops, but rather, just break out of the inner loop, because we now know matrix[i][j] is already excluded, then of course, matrix[i][j+1], matrix[i][j+2], etc., should all be excluded.
                    break;
                }
            }
        }
        
        while(!pq.empty()){
            // this is a max heap, so every time we get is the largest; therefore data in ans is sorted (based on the sum) in descending order
            ans.push_back({pq.top().second.first , pq.top().second.second});
            pq.pop();
        }
        // reverse it so we get it in ascending order.
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
