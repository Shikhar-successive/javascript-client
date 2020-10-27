export default function diamond(row)
{    if(row <= 1 || row>=10)
     {
          console.log("Invalid Entry. Value must be in range 2-10")
     }
     else
     {
          let blank = row-1;
          for(let i=0;i<row;i++)
          {
               let upper = "";
               for(let j=0;j<blank;j++)
               {
                    upper += " ";
               }

               for(let j=0;j<=i;j++)
               {
                    upper += "* ";
               }
               console.log(upper);
               blank--;
          }

          blank=0;

          for(let i=row;i>0;i--)
          {
               let lower = "";
               for(let j=0;j<blank;j++)
               {
                    lower += " ";
               }

               for(let j=0;j<i;j++)
               {
                    lower += "* "
               }
               console.log(lower);
               blank++;
          }
     }
}