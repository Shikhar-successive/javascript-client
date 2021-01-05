export default function diamond(row: number) {
         if (row <= 1 || row >= 10) {
          console.log('Invalid Entry. Value must be in range 2-10');
     }
     else {
          let blank: number = row - 1;
          for (let i: number = 0 ; i < row ; i++) {
               let upperDiamond: string = '';
               for (let j: number = 0; j < blank; j++) {
                    upperDiamond += ' ';
               }

               for (let j: number = 0; j <= i; j++) {
                    upperDiamond += '* ';
               }
               console.log(upperDiamond);
               blank--;
          }

          blank = 0;

          for (let i: number = row; i > 0; i--) {
               let lower: string = '';
               for (let j: number = 0; j < blank; j++) {
                    lower += ' ';
               }

               for (let j: number = 0; j < i; j++) {
                    lower += '* ';
               }
               console.log(lower);
               blank++;
          }
     }
}