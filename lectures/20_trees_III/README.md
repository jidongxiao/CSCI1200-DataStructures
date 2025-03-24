# Lecture 20 --- Trees, Part III

Review from Lecture 18 & 19
- Overview of the ds_set implementation
- begin, find, destroy_tree, insert
- In-order, pre-order, and post-order traversal;
- Iterator implementation. Finding the in order successor to a node: add parent pointers or add a list/vector/stack
of pointers to the iterator.
<!-- - B+ Tree Overview -->

## Today’s Lecture

- Breadth-first and depth-first tree search
- Increement/decrement operator
- Tree height, longest-shortest paths, breadth-first search
- Last piece of ds_set: removing an item, erase
- Erase with parent pointers, increment operation on iterators

## 20.1 ds_set Warmup/Review Exercises

- Draw a diagram of a possible memory layout for a ds_set containing the numbers 16, 2, 8, 11, and 5. Is there
only one valid memory layout for this data as a ds_set? Why?

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

- In what order should a forward iterator visit the data? Draw an abstract table representation of this data
(omits details of TreeNode memory layout).

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## 20.2 Second Approach of Operator++

We can also implement operator++ for the ds_set iterator without using the parent pointers. To achieve this, we need a container of pointers representing path from root to node. The following diagram represents the idea, and the code is provided here: [ds_set_ptrs.h](ds_set_ptrs.h) and [ds_set_main.cpp](ds_set_main.cpp).
![alt text](ds_set_history.png "ds set history")

## 20.3 Depth-first vs. Breadth-first Search

- We should also discuss two other important tree traversal terms related to problem solving and searching.
  - In a depth-first search, we greedily follow links down into the tree, and don’t backtrack until we have hit a leaf. When we hit a leaf we step back out, but only to the last decision point and then proceed to the next leaf. This search method will quickly investigate leaf nodes, but if it has made an “incorrect” branch decision early in the search, it will take a long time to work back to that point and go down the “right” branch.

  - In a breadth-first search, the nodes are visited with priority based on their distance from the root, with nodes closer to the root visited first. In other words, we visit the nodes by level, first the root (level 0), then all children of the root (level 1), then all nodes 2 links from the root (level 2), etc. If there are multiple solution nodes, this search method will find the solution node with the shortest path to the root node.  However, the breadth-first search method is memory-intensive, because the implementation must store all nodes at the current level – and the worst case number of nodes on each level doubles as we progress down the tree!

- Both depth-first and breadth-first will eventually visit all elements in the tree.
- Note: The ordering of elements visited by depth-first and breadth-first is not fully specified.
  - In-order, pre-order, and post-order are all examples of depth-first tree traversals. Note: A simple recursive tree function is usually a depth-first traversal.

  - What is a breadth-first traversal of the elements in our sample binary search trees above?

## 20.4 General-Purpose Breadth-First Search/Tree Traversal

- Write an algorithm to print the nodes in the tree one tier at a time, that is, in a breadth-first manner.

  ```cpp
  BFS code discussed in class

  void breadth_first_traverse(Node* root)
  {
    int level=0;
    std::vector<Node*> current_level;
    std::vector<Node*> next_level;
    if(root==NULL){return;}
    current_level.push_back(root);
    while(current_level.size()!=0)
    {
      std::cout<<"level"<<level<<":";
      for (unsigned i=0; i<current_level.size();i++)
       {
         if(current_level[i]->left != NULL)
          next_level.push_back(current_level[i]->left);
         if(current_level[i]->right != NULL)
          next_level.push_back(current_level[i]->right);
         std::cout<<" "<<current_level[i]->value;
        }
       current_level = next_level;
       level++;
       next_level.clear();
       std::cout<<std.endl;
      }
     }
  ```

- What is the best/average/worst-case running time of this algorithm? What is the best/average/worst-case
memory usage of this algorithm? Give a specific example tree that illustrates each case.

## 20.5 Height and Height Calculation Algorithm

- The height of a node in a tree is the length of the longest path down the tree from that node to a leaf node. The height of a tree with only one node (the root node) is 1. The height of an empty tree (a tree with no nodes) is 0.

- The height of the tree is the height of the root node, and therefore if the tree is empty the height will be 0. Exercise: Write a simple recursive algorithm to calculate the height of a tree.
&nbsp;
&nbsp;
&nbsp;
 
- What is the best/average/worst-case running time of this algorithm? What is the best/average/worst-case memory usage of this algorithm? Give a specific example tree that illustrates each case.
&nbsp;
&nbsp;
&nbsp;

```cpp
Code generated in class for height and height calculation

unsigned int height(Node* p)
{
  if(p==NULL)
    return 0;
  if(p->right==NULL && p->left==NULL)
    return 1;

  unsigned int left = 1 + height(p->left);
  unsigned int right = 1 + height(p->right);
  if (left>right)
    return left
   return right;
}
```

```cpp
another method of writing the above code

unsigned int height(Node* p)
{
  if (p==NULL) return 0;

  return 1 + std::max(height(p->left), height(p->right));
}
```

## 20.6 Shortest Paths to Leaf Node

- Now let’s write a function to instead calculate the shortest path to a NULL child pointer.
&nbsp;
&nbsp;
&nbsp;

```cpp
code generated in class

void shortest_path_breadth(Node* root)
  {
    unsigned int level=0;
    std::vector<Node*> current_level;
    std::vector<Node*> next_level;
    if(root==NULL){return level;}
    current_level.push_back(root);
    while(current_level.size()!=0)
    {
      level++;
      for (unsigned i=0; i<current_level.size();i++)
       {
         if(current_level[i]->left != NULL)
          next_level.push_back(current_level[i]->left);
          else return level;
         if(current_level[i]->right != NULL)
          next_level.push_back(current_level[i]->right);
         else return level;
        }
      }
       current_level = next_level;
       next_level.clear();
      }
     }
```

- What is the running time of this algorithm? Can we do better? Hint: How does a breadth-first vs. depth-first algorithm for this problem compare?
&nbsp;
&nbsp;
&nbsp;

## 20.7 Erase

- First we need to find the node to remove. Once it is found,
the actual removal is easy if the node has no children or only one child.
Draw picture of each case!
- It is harder if there are two children:
  - Find the node with the greatest value in the left subtree or the node with the smallest value in the right subtree.

  - The value in this node may be safely moved into the current node because of the tree ordering.

  - Then we recursively apply erase to remove that node — which is guaranteed to have at most one child.

Exercise: Write a recursive version of erase.
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

Exercise: How does the order that nodes are deleted affect the tree structure? Starting with a mostly balanced
tree, give an erase ordering that yields an unbalanced tree.
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

```cpp
Code for function ERASE built in class so remember it has not been executed yet and may require some fixes here and there.

int erase (T const& key_value, TreeNode* &p){
 if (p->value == key_value)
 {
   if (p->left == NULL && p->right == NULL)
    {
      delete p;
      p=NULL;
      return 1;
    }
   else if (p->left == NULL)
    {
      TreeNode* tmp = p->right;
      tmp->parent = p->parent;
      delete p;
      p=tmp;
      return 1;
    }
    else if (p->right == NULL)
    {
      TreeNode* tmp = p->left;
      tmp->parent = p->parent;
      delete p;
      p=tmp;
      return 1;
    }
    else
    { //reusing begin logic
      TreeNode* tmp = p->left;
      while(tmp -> right)
          tmp = tmp->right;
      
      p->value = tmp->value;
      return erase(p->value, tmp);
    }
}
else if (p-> value < key_value)
{
  return erase(key_value, p->right);
}
else
{
  assert (p->value > key_value);
  return erase (key_value, p->left);
}
return 0;
}

}
```

## 20.8 Erase (now with parent pointers)

- If we choose to use parent pointers, we need to add to the Node representation, and re-implement several ds_set member functions.
- Exercise: Study the new version of insert, with parent pointers.
&nbsp;
&nbsp;
&nbsp;

- Exercise: Rewrite erase, now with parent pointers.
&nbsp;
&nbsp;
&nbsp;

