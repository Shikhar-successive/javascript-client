export default function equlatral_triangle(row)
{
     if(row <= 1 || row >=10)
     {
          console.log("Invalid Entry. Value must be in range 2-10")
     }
     else
     {
          let blank = row-1;
          for(let i=0;i<row;i++)
          {
               let triangle = "";
               for(let j=0;j<blank;j++)
               {
                    triangle += " ";
               }

               for(let j=0;j<=i;j++)
               {
                    triangle += "* ";
               }
               console.log(triangle);
               blank--;
          }
    }    
}