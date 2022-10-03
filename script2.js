
const getFileName=()=>{
    var fileName='./simplyInstaller/installer-simply.exe';
    if (navigator.userAgent.indexOf("Mac")!=-1)
    { fileName='./simplyInstaller/Simply 2.zip'};
    return fileName;  
}
const downloadBtn= document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", ()=>{location.href=getFileName()});



