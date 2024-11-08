#include <stdio.h>

int main() {
    
     int a,b,c;
     scanf("%d%d%d",&a,&b,&c);
     if(a==b && b==c)
     {
         printf("Equilateral");
     }
     else if (a==b || a==c || b==c)
     {
         printf("Isocelles");
     }
     
     else if(a*a+b*b==c*c || a*a+c*c==b*b || b*b+c*c==a*a)
     {
         printf("Rigthangle");
     }
     else
     {
         printf("Scalene");
     }
    
}