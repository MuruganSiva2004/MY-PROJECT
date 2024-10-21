#include <stdio.h>
#define max(a,b) (a)>(b)?(a):(b)


int main()
{
  int a,b,Max;
  scanf("%d%d",&a,&b);
  Max=max(a,b);
  printf("The Maximum number is %d",Max);

}