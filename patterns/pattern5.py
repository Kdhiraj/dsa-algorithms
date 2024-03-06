# pattern5 
# for n = 5 
# row     col
# 1    1,2,3,4,5
# 2    1,2,3,4
# 3    1,2,3
# 4    1,2
# 5    1
# col = n - row + 1 -> formula

#2nd logic if i reverse the loop then pattern is printing n times

# * * * * *
# * * * *
# * * *
# * *
# *

n = int(input("Enter the no of lines: "))

for row in range(1, n+1): 
    for col in range(0, n-row+1):
        print("*", end=" ")
    print()
    

#Using 1 loop
for i in range(n, 0, -1):
    print("* " * i)