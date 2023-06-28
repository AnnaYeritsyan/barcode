let modal = document.getElementsByClassName("bcode")
let modal_window = document.getElementById("modal-open-close")
let mod = document.getElementsByClassName("modal-close")
let barcode = document.getElementsByClassName("barcode")
let barcodename = document.getElementsByClassName("barcode-sign")
let codename = 0;
let print_name = document.getElementsByClassName("print")
let printall = document.getElementById("printall")
let list =[]
let listitems = 0
let prm = document.getElementsByClassName("print-allmodal")
let prmid = document.getElementById("print-allmodal")



let printallmodal = document.getElementById("printallmodal")
let printmod = document.getElementsByClassName("print-allmodal")
let conttext =0;

for (let i = 0,  g = 0, k = 0; i < modal.length, g < barcode.length, k < print_name.length; i++, g++, k++) {
  list.push(barcode[i].textContent)
            // console.log(list)
    modal[i].onclick = function () {
        // console.log("oh ");
        if(modal_window.style.display == "block"){
            modal_window.style.display = 'none'
}
       
        else{
            modal_window.style.display = 'block'
            codename= barcode[g].textContent
            
    barcodename[0].innerHTML = "*"+codename+"*"
  console.log(codename)
        }
        }
         print_name[k].onclick = function(){
            console.log("xsamk")
            window.print(barcodename)
        }

        
    } 
    console.log(list)
   
  printall.onclick = function(){
                if(printallmodal.style.display == "block"){
                     printallmodal.style.display = "none"
                    
                }
                else {
                    printallmodal.style.display = "block"
                    
                    //  for(let item in list){
                    //     console.log(list[item])
                    //     listitems = list[item]
                    //  prmid.innerHTML += "*" + listitems + "*" + " "  
                    //  console.log(prmid)
                    // }

                    prmid.map((item)=> item.innerHTML +="*" + listitems + "*" + " ")
                  window.print(prmid)
                    
                } 
             
                 list =[]
                 
            } 
             
            
        
    
    let inpFile = document.getElementById("inpFile")
    let btnUpload = document.getElementById("btnUpload")

    btnUpload.addEventListener("click", function(){
      let xhr =  new XMLHttpRequest()
        let formData = new FormData()

         for (let file of inpFile.files) {
             formData.append("myFiles[]", file)
             console.log(formData);

         }

         xhr.open("post", "warehouse_in")
         xhr.send(formData)
        });
    
