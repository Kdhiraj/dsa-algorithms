# 2. Pattern

# *
# **
# ***
# ****
# *****

n = int(input("Enter the number of lines you want to print: "))

for i in range(0, n):
    pattern = ""
    for j in range(0, i+1):
        pattern+= "* "
    print(pattern)
    

#2nd way using 1 loop
for i in range(0, n + 1):
    print("* " * i)