class Solution {
public:
    // use a non-type parameter as the template parameter list.
    template <int F>    // F represents factor, and it has to be constant
    // reduce factor n, has to be reference, because we want to change n.
    void reduceFactor(int& n){
        while(n%F==0){
            n = n/F;
        }
    }
    bool isUgly(int n) {
        // ugly number has to be a positive integer.
        if(n<=0){
            return false;
        }
        // reduce factor 2
        reduceFactor<2>(n);
        // reduce factor 3
        reduceFactor<3>(n);
        // reduce factor 5
        reduceFactor<5>(n);
        return (n==1);
    }
};
