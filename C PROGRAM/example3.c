#include<stdio.h>
int main()
{
    int num, power_of_2=1;
    scanf("%d",&num);
    while(power_of_2<=num)
    {
        printf("% d",power_of_2);
        power_of_2*=2;
    }
    printf("\n");

}