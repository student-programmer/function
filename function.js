function getStrMonth(m){
let d = new Date();
let Months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", " Sep", "Oct", "Nov", "Dec"];
let correntMonth = d.getMonth();
if((m < 0) || (m > 11)) return Months[correntMonth];
return Months[m];
}
let d = new Date();
alert(getStrMonth(d.getMonth(3)))
