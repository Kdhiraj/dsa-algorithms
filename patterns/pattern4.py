# pattern 4 :
# 1
# 2 2
# 3 3 3
# 4 4 4 4
# 5 5 5 5 5


n = int(input("Enter the no of lines you want to print: "))
  
for row in range(1, n + 1):
    for col in range(row):
        print(row, end=" ")
    print()

        
        
       
        