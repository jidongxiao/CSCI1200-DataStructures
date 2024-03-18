

int hash_function(int number) {
  //return 5;                    /// BAD: always the same
  //return number / 1000000000;  /// BAD: first bad
  return number % PHONEBOOK_SIZE;  // REASONABLY GOOD:
}

void add(Node* phonebook[PHONEBOOK_SIZE], int number, const std::string& name) {
  int index = hash_function(number) % PHONEBOOK_SIZE;
  Node* tmp = new Node;
  tmp->name = name;
  tmp->number = number;
  tmp->next = phonebook[index];
  phonebook[index] = tmp;
  // what about duplicate / repeated add?
}

std::string identify(Node* phonebook[PHONEBOOK_SIZE], int number) {
  Node* current =  phonebook[ hash_function(number) % PHONEBOOK_SIZE ];
  while ( current != NULL && current->number != number ) {
    current = current->next;
  }
  if (current == NULL) return "UNKNOWN CALLER";
  return current->name;
}
