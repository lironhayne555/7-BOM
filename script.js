for(var i=0;i<100;i++)
{
var stringI=i.toString();
if(i%7==0 || stringI.includes('7'))
{
    console.log('BOM');
    var stringI2=i+1;
    stringI2=stringI2.toString();
    if(parseInt(stringI2) %7==0 || stringI2.includes('7'))
    {
        i++;
        console.log("This is a double BOM");
    }
    continue;
}
console.log(i);
}