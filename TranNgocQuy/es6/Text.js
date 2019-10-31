// Xay dung ham tim kiem nam nhuan
var main = function (year) {
   console.log("-------Tim kiem nam nhuan-------");
   //neu so nam do chia het cho 400
   //do la mot nam nhuan
   if (year % 400 == 0) {
      console.log(year + " Day la mot nam nhuan.")
   }
   //neu so nam chia het cho 4 va khong chi het cho 100
   //do la nam nhuan 
   else if (year % 4 == 0 && year % 100 != 0) {
      console.log(year + " Day la mot nam nhuan")
   } else {
      console.log(year + " Day khong la nam nhuan")
   }
}

var tinhTong = function (a, b) {
   console.log("------Xuat ket qua phep tinh-------")
   console.log("Ket qua " + a + " + " + b + " = " + (a + b));
   console.log("Ket qua " + a + " - " + b + " = " + (a - b));
   console.log("Ket qua " + a + " * " + b + " = " + (a * b));
   console.log("Ket qua " + a + " / " + b + " = " + (a / b));
   console.log("")
}

var arr_year = function (a, b, c, d) {
   var arr = [a, b, c, d];
   for (var i = 0; i < arr.lenght; i++) {
      console.log(arr[i]);
   }
}
//goi ham tinh thuc thi
tinhTong(2, 3);
//goi ham tim kiem nam nhuan 
main(2001);
//
arr_year(2000, 2001, 2002, 2004);