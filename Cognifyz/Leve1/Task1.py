#Task1 String Reversal
def reverse(string):
    temp=""
    for i in range(len(string)-1,-1,-1):
        temp+=string[i]
    return temp
string=input("Enter the string:")
print("Original String:",string)
print("Reversed String:",reverse(string))