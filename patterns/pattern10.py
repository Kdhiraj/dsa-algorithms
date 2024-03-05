# *
# **
# ***
# ****
# *****
# ****
# ***
# **
# *

"""
logic:
use nested loop 
use outer loop for print no of lines
use inner loop for print pattern

here first pyramid 
for line 1 there is 1 star and so on


lower pyramid

for n = 5
after n - 1 = 4 
pattern is decreasing by line 
so the formula is from total star = total no of lines - no of rows 
"""
n = int(input("Enter the number of lines you want to print: "))

#first loop for upper pyramind
for i in range(1, n + 1):
    
    for j in range(0, i):
        print("*",end="")
    print()
 
 
# this loop is used to print lower pyramid   
for i in range(1, n):
    
    for j in range(0, n-i):
        print("*",end="")
    print()