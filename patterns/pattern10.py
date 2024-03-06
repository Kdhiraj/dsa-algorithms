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
outer loop run  2* n - 1 = 9 times
Inner loop print start equal to row no till nth after that 2*n - i times
"""
n = int(input("Enter the number of lines you want to print: "))

    
#nd way to do it:

for i in range(1, 2*n):
    stars = i
    if(i > n):
        stars = 2 * n - i
    for j in range(0, stars):
        print("*", end="")
    print()