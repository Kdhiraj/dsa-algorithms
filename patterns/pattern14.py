#A
#AB
#ABC
#ABCD
#ABCDE

n = int(input("Enter the number of lines you want to print: "))
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(chr(64 + j), end=" ")
    print()