#Task 2 
#Temperature conversion
def celToFran(celsius):
    celtofran = (celsius * 9/5) + 32
    return celtofran

def franToCel(fahrenheit):
    frantoCel = (fahrenheit - 32) * 5/9
    return frantoCel
celsius = None
fahrenheit = None

while True:
    print("\nIf you want to convert Celsius to Fahrenheit, enter 1.")
    print("If you want to convert Fahrenheit to Celsius, enter 2.")
    print("If you want to Exit, enter 3.")

    choice = input("Enter your choice (1, 2, or 3): ")

    if choice == "1":
        celsius = float(input("Enter the Celsius: "))
        print(f"Celsius To Fahrenheit:{celsius}°C = {celToFran(celsius)}°F")
    elif choice == "2":
        fahrenheit = float(input("Enter the Fahrenheit: "))
        print(f"Fahrenheit to Celsius:{fahrenheit}°F = {franToCel(fahrenheit)}°C")
    elif choice == "3":
        print("\n--- Conversion Summary ---")
        if celsius is not None:
            print(f"Celsius To Fahrenheit: {celsius}°C = {celToFran(celsius)}°F")
        if fahrenheit is not None:
            print(f"Fahrenheit To Celsius: {fahrenheit}°F = {franToCel(fahrenheit)}°C")
        print("Thank You!!")
        break
    else:
        print("Invalid choice! Please Enter the correct choice!!!")
