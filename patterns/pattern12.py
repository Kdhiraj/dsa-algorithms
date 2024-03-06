# 1      1
# 12    21
# 123  321
# 12344321


#use nested loop 
#outer loop will run 5 times
#3 inner loop one for print number 
# one for space
# one for print number in reverse order
n = int(input("Enter the number of lines you want to print: "))
space = 2 * (n-1)
for i in range(1, n+1):
    for j in range(1, i + 1):
        print(j ,end="")
    for k in range(space):
        print(" ", end="")  
    for l in range(i,0, -1):
        print(l , end="")
    space = space - 2
    print()




for i in range(1, n + 1):
    # Print numbers in increasing order
    for j in range(1, i + 1):
        print(j, end="")
    
    # Print spaces
    for k in range(1, 2 * (n - i) + 1):
        print(" ", end="")
    
    # Print numbers in decreasing order
    for l in range(i, 0, -1):
        print(l, end="")
    
    print()  # Move to the next line after each row


