/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeLists(ListNode* head1, ListNode* head2){
        // the value doesn't matter here
        ListNode *head = new ListNode(-1);
        ListNode* current;
        current = head;
        if(head1 == nullptr){
            return head2;
        }
        if(head2 == nullptr){
            return head1;
        }
        while(head1!=nullptr && head2!=nullptr){
            if(head1->val < head2->val){
                current->next = head1;
                head1 = head1->next;
            }else{
                current->next = head2;
                head2 = head2->next;
            }
            current = current->next;
        }

        // at this point, one of them has already been merged into the "New" list.
        if(head1!=nullptr){
            // this means we still have some elements on the 1st list, now let's merge them into the "New" list.
                current->next = head1;
        }else{
            // this means we still have some elements on the 2nd list, now let's merge them into the "New" list.
                current->next = head2;
        }
        return head->next;
    }

    ListNode* sortList(ListNode* head) {
        // base case
        if(head==nullptr || head->next==nullptr){
            return head;
        }

        // split the list
        ListNode* slow=head;
        ListNode* fast=head;
        ListNode* tail1;
        while(fast!=nullptr && fast->next!=nullptr){
            tail1 = slow;
            slow = slow->next;
            fast = fast->next;
            fast = fast->next;
        }
        // this is the actual split action
        tail1->next = nullptr;
        // slow actually is now pointing to the head of the second half
        // so let's just rename it to make the variable name more meaningful
        ListNode* head2 = slow;

        // now let's do the recursion
        head = sortList(head);
        head2 = sortList(head2);

        // after the two sub-lists are sorted, we merge them into one list
        head = mergeLists(head, head2);
        return head;
    }
};
