/*
Test Data Generator
As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). 
Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
*/

const roles = ["admin", "editor", "viewer", "tester", "manager"];
const totalUsers = 15;
