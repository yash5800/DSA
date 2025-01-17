# Data Structures and Algorithms (DSA) Journey Using JavaScript 🚀

This repository documents my journey of learning **Data Structures and Algorithms (DSA)** using JavaScript. It contains code, explanations, and examples for each concept, making it a personal reference for future use.

---

## Table of Contents

1. [Introduction to DSA](#introduction-to-dsa)
2. [Big-O Notation](#big-o-notation)
3. [Custom Array Implementation](#custom-array-implementation)
4. [Problem Solving](#problem-solving)
5. [Linked Lists](#linked-lists)
   - [Single Linked List (SLL)](#single-linked-list-sll)
   - [Double Linked List (DLL)](#double-linked-list-dll)
6. [Future Topics](#future-topics)

---

## Introduction to DSA

- **What is DSA?**  
  Data Structures and Algorithms (DSA) form the backbone of computer science.  
  - **Data Structures** are methods of organizing and storing data.  
  - **Algorithms** are step-by-step instructions for solving problems efficiently.

- **Why Learn DSA?**  
  - It enhances problem-solving skills.  
  - Helps in cracking coding interviews.  
  - Optimizes code for better performance.  

---

## Big-O Notation

Big-O Notation is used to measure the **time** and **space complexity** of algorithms. It describes how an algorithm scales with the size of the input.

### Types of Complexities:
- **O(1)**: Constant time (e.g., accessing an array element).
- **O(n)**: Linear time (e.g., iterating over an array).
- **O(n²)**: Quadratic time (e.g., nested loops).
- **O(log n)**: Logarithmic time (e.g., binary search).

---

## Custom Array Implementation

On Day 2, I created my own custom array class to understand how arrays work under the hood.

### Features Implemented:
1. **push(val):** Adds a value to the end of the array.
2. **pop():** Removes the last value from the array.
3. **shift():** Removes the first value and shifts all elements.
4. **delete(index):** Deletes a value at a specific index and shifts elements.

### Code:
[View the Custom Array Implementation here](./MyArray.js)

---

## Problem Solving

### Problems Solved:
**Two Sum**  
   Find two numbers in an array that add up to a specific target.  
   Example:  
   Input: `[2, 7, 11, 15]`, Target: `9`  
   Output: `[0, 1]` (Because `2 + 7 = 9`).

**Divide Array into N Chunks**  
   Divide an array into `n` chunks of approximately equal size.  
   Example:  
   Input: `[1, 2, 3, 4, 5, 6]`, Chunks: `3`  
   Output: `[[1, 2], [3, 4], [5, 6]]`.
   
and others..

---

## Linked Lists

### Single Linked List (SLL)

A **Single Linked List (SLL)** is a linear data structure where each node contains:
- A `value` (data).
- A `next` pointer to the next node in the sequence.

### Methods Implemented:
1. **push(val):** Adds a node to the end.
2. **pop():** Removes the last node.
3. **unshift(val):** Adds a node to the beginning.
4. **shift():** Removes the first node.
5. **get(index):** Retrieves a node by its index.
6. **set(index, val):** Updates the value of a node by its index.
7. **insert(pos, val):** Inserts a node at a specific position.
8. **size():** Returns the total number of nodes.
9. **clear():** Removes all nodes.
10. **getFirst():** Retrieves the beginning node.
11. **getLast(index):** Retrieves the last node.

### Code:
[View the Single Linked List (SLL) implementation here](./SingleLinkList.js)

---

### Double Linked List (DLL)

A **Double Linked List (DLL)** is a more advanced version of a linked list where each node contains:
- A `value` (data).
- A `next` pointer to the next node.
- A `prev` pointer to the previous node.

### Features To Be Implemented:
- Adding nodes at the beginning and end.
- Removing nodes at the beginning and end.
- Traversing forward and backward.

[View the Double Linked List (DLL) Structure](./DoubleLinkList.js)

---

## Future Topics

Here are the topics I plan to learn and implement next:
1. **Stacks and Queues**  
   Efficient data structures for managing sequential data with LIFO (Last In, First Out) and FIFO (First In, First Out) properties.

2. **Trees**  
   Hierarchical data structures, including Binary Trees and Binary Search Trees (BST).

3. **Graphs**  
   Implementing graph structures and algorithms like BFS (Breadth-First Search) and DFS (Depth-First Search).

4. **Sorting Algorithms**  
   Exploring sorting methods like Bubble Sort, Merge Sort, and Quick Sort.

5. **Dynamic Programming**  
   Solving problems by breaking them into smaller subproblems and using memoization.

6. **Searching Algorithms**  
   Learning Linear Search, Binary Search, and other advanced searching techniques.

---

Stay tuned for more updates as I continue this journey! 😊
