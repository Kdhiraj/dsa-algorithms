
# 3. pattern
# 1
# 1 2
# 1 2 3
# 1 2 3 4
# 1 2 3 4 5

n = int(input("Enter the no of lines you want to print: "))

for row in range(1, n + 1):
    for col in range(1, row + 1):
        print(col,end=" ")
    print()
    