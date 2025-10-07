# Task: Calculator Program

def add(num1, num2):
    return num1 + num2

def sub(num1, num2):
    return num1 - num2

def mul(num1, num2):
    return num1 * num2

def div(num1, num2):
    return num1 / num2   

def mod(num1, num2):
    return num1 % num2
    

num1 = None
num2 = None

while True:
    print("""\nPlease select an operation
      1. Addition
      2. Subtraction
      3. Multiplication
      4. Division
      5. Modulus
      6. Display Summary
      7. Exit""")

    choice = input("Enter your choice: ")

    if choice in ["1", "2", "3", "4", "5"]:
        num1 = int(input("Enter the First Number: "))
        num2 = int(input("Enter the Second Number: "))

        print("---------------------------------------------")
        if choice == "1":
            sums=add(num1,num2)
            print("The Addition of Two Numbers is:", sums)
        elif choice == "2":
            subtraction=sub(num1,num2)
            print("The Subtraction of Two Numbers is:", subtraction)
        elif choice == "3":
            multiplication=mul(num1,num2)
            print("The Multiplication of Two Numbers is:", multiplication)
        elif choice == "4":
            if num2!=0:
                division=div(num1,num2)
                print("The Division of Two Numbers is:", division)
            else:
                print("Error: Division by zero,Please Enter the correct value!!!")
        elif choice == "5":
            if num2!=0:
                modulus=mod(num1,num2)
                print("The Modulus of Two Numbers is:", modulus)
            else:
                print("Error: Modulus by zero,Please Enter the correct value!!!")
        print("---------------------------------------------\n")

    elif choice == "6":
        if num1 is None or num2 is None:
            print("No calculations done yet! Please perform an operation first.")
        else:
            print("****************************************************")
            print("*                  Summary                         *")
            print("****************************************************")
            print(f"* The Addition of Two Numbers       : {sums}")
            print(f"* The Subtraction of Two Numbers    : {subtraction}")
            print(f"* The Multiplication of Two Numbers : {multiplication}")
            print(f"* The Division of Two Numbers       : {division}")
            print(f"* The Modulus of Two Numbers        : {modulus}")
            print("****************************************************")

    elif choice == "7":
        print("------ Thank You! ------")
        break

    else:
        print("Invalid choice! Please Enter the correct choice!!!")
