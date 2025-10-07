#Fibonacci Generator
def fib(n):
    a,b=0,1
    for i in range(n):
        yield a
        a,b=b,a+b
num=int(input("Enter the number of the terms:"))
print("Fibonacci Series:")
for value in fib(num):
    print(value,end=" ")