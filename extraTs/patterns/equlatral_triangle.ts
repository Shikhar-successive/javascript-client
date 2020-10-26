export default function equlatral_triangle(row: number) {
     if (row <= 1 || row >= 10) {
          console.log('Invalid Entry. Value must be in range 2-10');
     }
     else {
          let blank: number = row - 1;
          for (let i: number = 0; i < row; i++) {
               let triangle: string = '';
               for (let j: number = 0; j < blank; j++) {
                    triangle += ' ';
               }

               for (let j: number = 0; j <= i; j++) {
                    triangle += '* ';
               }
               console.log(triangle);
               blank--;
          }
    }
}