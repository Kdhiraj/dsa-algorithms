 
#  pattern no 7

#     *
#    ***
#   *****
#  *******
# *********

n = int(input("Enter the number of lines you want to print: "))




#using nested loop:
# space star space
# 4     1   4
# 3     3   3
# 2     5   2
# 1     7   1
# 0     9   0

# suppose we have to print 5 lines n=5, so for line 1 there is four space and for line 2 then are 3 space and decreasing by 1 and each line
# so for print space we need to run loop n-i times 

# and for start we are increment by 2 and become odd number -> 2 *i - 1 run loop 

for i in range(1, n + 1):
    # loop for print space
    for j in range(0, n - i):
        print(" ", end="")
        
    # loop for print start
    for j in range(2 * i - 1):
        print("*", end="")
    
    print()
    
    
# using one loop
for i in range(1, n + 1):
    spaces = " " * (n - i) 
    stars = "*" * (2 * i - 1)
    print(spaces  +  stars)
