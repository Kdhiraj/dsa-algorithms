 
#  pattern no 8

# *********
#  ******* 
#   ***** 
#    ***
#     *

n = int(input("Enter the number of lines you want to print: "))




#using nested loop:
# space star space
# 0     9   0
# 1     7   1
# 2     5   2
# 3     3   3
# 4     1   4

# suppose we have to print 5 lines n=5, so for line 1 0  there is o space and for line 2 or row = 1 there are 2 space then are 3 space and decreasing by 1 and each line
# so for print space we need to run loop col < row times 

# and for start we are increment by 2 and become odd number -> 2 * N  - (2*i+1) run loop 

for i in range(0, n):
    # loop for print space
    for j in range(0, i):
        print(" ", end="")
        
    # loop for print start
    for j in range(2 * n - (2*i+1)):
        print("*", end="")
    
    print()
    
    
# using one loop run loop in reverse order
for i in range(n, 0, -1):
    spaces = " " * (n - i) 
    stars = "*" * (2 * i - 1)
    print(spaces  +  stars)
