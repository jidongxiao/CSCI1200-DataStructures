#include "stop_and_copy.h"


// Return the node corresponding to a particular address
Node& StopAndCopy::operator[](Address addr) { 
  if (addr == MY_NULL) {
    std::cerr << "ERROR: NULL POINTER EXCEPTION!" << std::endl; exit(1); }
  if (addr < OFFSET || addr >= OFFSET+CAPACITY) {
    std::cerr << "ERROR: SEGMENTATION FAULT!" << std::endl; exit(1); }
  return memory[addr-OFFSET]; 
}


Address StopAndCopy::my_new(char v, Address l, Address r) {
  // if we are out of memory, collect garbage
  if (next == partition_offset+CAPACITY/2) { 
    collect_garbage(); 
    // update the addresses (since memory has been shuffled!)
    if (l != MY_NULL) l = memory[l-OFFSET].left;
    if (r != MY_NULL) r = memory[r-OFFSET].left;
  }
  // if we are still out of memory, we can't continue
  if (next == partition_offset+CAPACITY/2) { 
    std::cerr << "ERROR: OUT OF MEMORY!" << std::endl; exit(1); }
  // assign the next available node
  memory[next].value = v;
  memory[next].left = l;
  memory[next].right = r;
  return OFFSET + next++;
}


// Print function for debugging
std::ostream& operator<<(std::ostream &ostr, StopAndCopy &m) {
  ostr << "root-> " << m.root << std::endl;
  for (int i = 0; i < CAPACITY; i++) {
    ostr.width(4); ostr << i+OFFSET << " "; }
  ostr << std::endl;
  for (int i = 0; i < CAPACITY; i++) {
    ostr << "   "; ostr.width(1); ostr << m.memory[i].value << " "; }
  ostr << std::endl;
  for (int i = 0; i < CAPACITY; i++) {
    ostr.width(4); ostr << m.memory[i].left << " "; }
  ostr << std::endl;
  for (int i = 0; i < CAPACITY; i++) {
    ostr.width(4); ostr << m.memory[i].right << " "; }
  ostr << std::endl;
  // print "FREE" or "used" for each node in the current partition
  for (int i = 0; i < CAPACITY; i++) {
    if (i >= m.next && i < m.partition_offset+CAPACITY/2)
      ostr << "FREE ";
    else if (i >= m.partition_offset && i < m.partition_offset+CAPACITY/2)
      ostr << "used ";
    else  // print nothing for the other half of memory
      ostr << "     "; }
  ostr << std::endl;
  return ostr;
}
 

void StopAndCopy::collect_garbage() {
  // switch to the other partition
  partition_offset = (partition_offset == 0) ? CAPACITY/2 : 0;
  // scan & next start at the beginning of the new partition
  Address scan;
  next = scan = partition_offset;
  // copy the root
  copy_help(root);
  // scan through the newly copied nodes
  while (scan != next) {
    // copy the left & right pointers
    copy_help(memory[scan].left);
    copy_help(memory[scan].right);
    scan++;
  }
}


void StopAndCopy::copy_help(Address &old) {
  // do nothing for NULL Address
  if (old == MY_NULL) return;
  // look for a valid forwarding address to the new partition
  int forward = memory[old-OFFSET].left;
  if (forward-OFFSET >= partition_offset &&
      forward-OFFSET < partition_offset+CAPACITY/2) {
    // if already copied, change pointer to new address
    old = forward;
    return;
  } 
  // otherwise copy it to a free slot and leave a forwarding address
  memory[next] = memory[old-OFFSET];
  memory[old-OFFSET].left = next+OFFSET;
  old = next+OFFSET;
  next++;
}

