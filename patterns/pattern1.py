"""
Exampel 1: Pattern printing
input N = 6

******
******
******
******
******
******

N = 3

***
***
***
"""

"""
Logic
we are printing star n times in rows and columns. so it's clear that we need to track both rows and column
so we have to use 2 loops one for row and one for column

steps: 
1. We always use nested loops for printing the patterns. 
2. For the outer loop, we count the number of lines/rows and loop for them.
3. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.
4. We print the ‘*’ inside the inner loop.
5 .Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.

"""


n = int(input("Enter the number of rows and columns you want to print: "))

for i in range(0, n):
    star = ""
    for j in range(0,n):
        star += '* '
    print(star)
    
    
#2nd way using 1 loop
for i in range(0, n):
    print("* " * n)