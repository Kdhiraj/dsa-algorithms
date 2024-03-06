# ABCDE
# ABCD
# ABC
# AB 
# A


n = int(input("Enter the number of lines you want to print: "))
#run the loop in reverse order
for i in range(n, 0 , -1):
    for j in range(1, i+1):
        print(chr(64 + j), end=" ")
    print()
    
 
#using formula   
for i in range(0, n):
    for j in range(1, (n - i + 1)):
        print(chr(64 + j), end=" ")
    print()