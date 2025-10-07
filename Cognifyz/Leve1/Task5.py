#Task: Palindrome Checker
def palindrome(string):
    tem=""
    for i in range(len(string)-1,-1,-1):
        tem+=string[i]
    return tem
string=input("Enter the input:")
tem=palindrome(string)
if(string==tem):
    print("The given string is a palindrome.")
else:
    print("The given string is not a palindrome.")