#To take input we use input() function in python


""" Example 1 """


n = int(input("Enter the Number of elements in list : "))
#list is the datastructure in python like array which store the values in contigous memory location 
List = list()   
print("Enter the List elements")
for i in range(0, n):
    List.append(int(input()))
    
print('List elements are: ')
print(List)


""" Example2 

 Without using for loop 
 we use map function which first argument is function without () calling and second is iterator.
 To learn about more about map
 Refere to : https://realpython.com/python-map-function/
"""

print("Enter the list elements separated with comma ")
List = list(map(int, input().split(',')))
print("List elements are : ")
print(List) 


#Output :
"""
Example1: 

Enter the Number of elements in list : 2
Enter the List elements
1
2
List elements are: 
[1, 2]


Example2: 
Enter the list elements separated with comma 
1,2,3,4,5
List elements are : 
[1, 2, 3, 4, 5]
"""
