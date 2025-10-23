# 1
# 2 3
# 4 5 6
# 7 8 9 10
# 11 12 13 14 15


# Logic 
#     Use nested Loop
#     Outer Loop run n times 
#     Inner loop run <= outer loop
    #   and each col number is increasing by 1

n = int(input("Enter the number of lines you want to print: "))
    
num = 1
for i in range(1, n + 1):
    for j in range(0, i):
        print(num, end=" ")
        num += 1
    print()
