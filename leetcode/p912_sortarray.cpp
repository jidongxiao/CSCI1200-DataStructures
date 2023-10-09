class Solution {
public:
    vector<int> mergeArrays(vector<int>& v1, vector<int>& v2){
        int size1 = v1.size();
        int size2 = v2.size();
        vector<int> v(size1+size2, 0);
        int index1 = 0;
        int index2 = 0;
        int index = 0;
        // scan and compare, whoever is smaller goes to v.
        while(index1<size1 && index2<size2){
            if(v1[index1]<v2[index2]){
                v[index] = v1[index1];
                index1 = index1 + 1;
            }else{
                v[index] = v2[index2];
                index2 = index2 + 1;
            }
            index = index + 1;
        }

        // if v1 is done, let's now deal with v2 left overs
        if(index1>=size1){
            while(index2<size2){
                v[index] = v2[index2];
                index++;
                index2++;
            }
        }else{
            // else means v2 is done. let's now deal with v1 left overs
            while(index1<size1){
                v[index] = v1[index1];
                index++;
                index1++;
            }
        }
        return v;
    }
    vector<int> sortArray(vector<int>& nums) {
        int size = nums.size();
        // base case
        if(size==1){
            return nums;
        }
        // general case
        // split evenly or not evenly does not matter that much in this case
        int mid = size/2;
        vector<int> nums1(mid, 0);
        vector<int> nums2(size-mid, 0);
        for(int i=0;i<mid;i++){
            nums1[i]=nums[i];
        }
        for(int i=mid;i<size;i++){
            // caution: here the index in nums2 has to be i-mid, rather than i; and if we use i here, it will cause a heap buffer overflow issue.
            nums2[i-mid]=nums[i];
        }
        // sort the left half
        nums1 = sortArray(nums1);
        // sort the right half
        nums2 = sortArray(nums2);
        return mergeArrays(nums1, nums2);
    }
};
