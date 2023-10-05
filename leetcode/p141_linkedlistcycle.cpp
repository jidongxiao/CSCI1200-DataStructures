/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode *p1 = head;
        ListNode *p2 = head;
        while(p2!=nullptr && p2->next!=nullptr){
            // walk one step forward
            p1 = p1->next;
            // walk two steps forward
            p2 = p2->next;
            p2 = p2->next;
            if(p1 == p2){
                return true;
            }
        }
        return false;
    }
};
