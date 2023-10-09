/* This program attempts to create two linked list, one linked list consists of nodes of class NodeA type, 
 * the other linked list consists of nodes of class NodeB type, but we would like to use the same 
 * PushBack() function to append nodes to the end of these two linked lists, and use the same PrintList() function
 * to print the elements in both lists, and thus we need to make the PushBack() and the PrintList() templated functions.
 */

#include <iostream>
#include <cmath>

class NodeA {
public:
	int data;
	NodeA* next;
	NodeA* prev;
};

class NodeB{
public:
	double data;
	NodeB* next;
	NodeB* prev;
};

int main() {
	// Part 1: test NodeA class.
	// Initialize an empty linked list, consisting of NodeA nodes.
	NodeA* headA = nullptr;

	// Create nodes and add them to the end of the list using PushBack
	for (int i = 1; i <= 5; ++i) {
		NodeA* newNode = new NodeA;
		// data of NodeA is an int type.
		newNode->data = i;
		newNode->next = nullptr;
		newNode->prev = nullptr;

		// Add the node to the end of the list
		PushBack(headA, newNode);
	}

	// Print the linked list to verify the nodes
	std::cout << "Linked List of NodeA nodes: ";
	PrintList(headA);

	// Clean up memory (free nodes)
	NodeA* currentA = headA;
	while (currentA != nullptr) {
		NodeA* next = currentA->next;
		delete currentA;
		currentA = next;
	}

	// Part 2: test NodeB class.
	// Initialize an empty linked list, consisting of NodeB nodes.
	NodeB* headB = nullptr;

	// Create nodes and add them to the end of the list using PushBack
	for (int i = 1; i <= 5; ++i) {
		NodeB* newNode = new NodeB;
		// data of NodeA is a double type.
		newNode->data = (double)sqrt(i);
		newNode->next = nullptr;
		newNode->prev = nullptr;

		// Add the node to the end of the list
		PushBack(headB, newNode);
	}

	// Print the linked list to verify the nodes
	std::cout << "Linked List of NodeB nodes: ";
	PrintList(headB);

	// Clean up memory (free nodes)
	NodeB* currentB = headB;
	while (currentB != nullptr) {
		NodeB* next = currentB->next;
		delete currentB;
		currentB = next;
	}

	return 0;
}
