#include<stdio.h>
int main()
{
    int count=1;
    while(count<=10)
    {
    char ch='a';
    while(ch<='z')
    {
        printf("% c ",ch);
        ch++;
    }
    printf("\n");
    count++;
    }
    printf("\n");
    count=1;
    while(count<=10)
    {
    char v='A';
    while(v<='Z')
    {
        printf("% c ",v);
        v++;
    }
    printf("\n");
    count++;

    }
}