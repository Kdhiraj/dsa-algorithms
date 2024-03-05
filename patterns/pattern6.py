
# Pattern 6
# 1 2 3 4 5
# 1 2 3 4
# 1 2 3
# 1 2
# 1


n = int(input("Enter the number of lines you want to print: "))

# with reverse the loop
for i in range(n, 0, -1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
    
 
 #with formula   
for i in range(0, n + 1):
    for j in range(1, n - i + 1):
        print(j, end=" ")
    print()