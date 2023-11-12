class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        std::priority_queue<int> my_pq;
        int size = matrix.size();
        for(int i=0;i<size;i++){
            for(int j=0;j<size;j++){
                my_pq.push(matrix[i][j]);
                // doing so guarantees that there are only k elements in the priority queue; and we always kick the largest one out.
                if(my_pq.size()>k){
                    my_pq.pop();
                }
            }
        }
        // when we get out of the above nested loops, we know the priority queue stores the k smallest elements, and at the top is the largest element among them.
        return my_pq.top();
    }
};
