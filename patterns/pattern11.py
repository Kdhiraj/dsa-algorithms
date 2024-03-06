# 1
# 0 1 
# 1 0 1 
# 0 1 0 1
# 1 0 1 0 1


# 1. outerloop will run 5 times
# 2. inner loop is also run 5 times
# 3. now for pattern at even number we are print 0 

n = int(input("Enter the number of lines you want to print: "))
#   First row starts by printing a single 1.
start = 1

# Outer loop for the no. of rows
for i in range(0, n):
    #  if the row index is even then 1 is printed first in that row.
    if(i%2 == 0):
        start = 1
    else:
        # if odd, then the first 0 will be printed in that row.
        start = 0 
        
    #  We alternatively print 1's and 0's in each row by using the inner for loop.
    for j in range(0, i+1):
        
        print(start, end=" ")
        start = 1 - start
        
    # num = 1
    print()