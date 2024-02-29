# 1. calcuate the length of string
def string_lenght(str):
    count = 0
    for char in str:
        count += 1
    return count

print("length is", string_lenght("organisation"))

#2. Count the number of characters in a string

def character_frequency_count(str):
    
    dict = {}
    
    for n in str:
        
        if(n in dict.keys()):
            dict[n] = dict[n] + 1 # if key is already in dictionary then increment by 1
        else:
            dict[n] = 1 #assign 1 to dictionary key
            
    return dict
     
    
print(character_frequency_count('organisation'))
        
    