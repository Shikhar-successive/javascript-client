function diamond(row)
{    if(row <= 1 || row>=10)
     {
          console.log("Invalid Entry. Value must be in range 2-10")
     }
     else
     {
          let blank = row-1;
          for(i=0;i<row;i++)
          {
               let upper = "";
               for(j=0;j<blank;j++)
               {
                    upper += " ";
               }

               for(j=0;j<=i;j++)
               {
                    upper += "* ";
               }
               console.log(upper);
               blank--;
          }

          blank=0;

          for(i=row;i>0;i--)
          {
               let lower = "";
               for(j=0;j<blank;j++)
               {
                    lower += " ";
               }

               for(j=0;j<i;j++)
               {
                    lower += "* "
               }
               console.log(lower);
               blank++;
          }
     }
}
diamond(process.argv[2]);