"""
Program to take input a word and convert the upperCase of word to lowerCase and loweCase to upperCase

eg:
input :
OranGE


output should be:

oRANge

"""

def convert_word(word):
    converted_word = ''
    for char in word:
        if char.isupper():
            converted_word += char.lower()
        elif char.islower():
            converted_word += char.upper()
        else:
            converted_word += char
    return converted_word

# Example usage
input_word = "OranGE"
converted_word = convert_word(input_word)
print(converted_word)  # Output: "oRANge"