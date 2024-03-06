# A 
# B B 
# C C C 
# D D D D 
# E E E E E


n = int(input("Enter the number of lines you want to print: "))
char = chr(65)
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(char, end=" ")
    char = chr(65 + i)
    print()