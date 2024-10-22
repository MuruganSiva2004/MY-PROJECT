//To find odd or even number
#include<stdio.h>
int main()
{
    int i=1;
    printf("Even numbers\n");
    while(i<=10)
    {
        if(i%2==0)
        {printf("%d\n",i);}
        i++;
    }
    i=1;
    printf("Odd Numbers\n");
    while(i<=10)
    {
        if(i%2!=0)
        {
            printf("%d\n",i);
        }
        i++;
    }

}