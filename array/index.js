

class myArray{
    constructor(){
        this.arrayElements={};
        this.length=0;
    }
    get(index=null){
        if(index){
            return this.arrayElements[index];
        }
        return this.arrayElements
    }
    push(value){
        this.arrayElements[this.length]=value;
        this.length ++;
        return this.arrayElements;
    }
    pop(){
        if(this.length == 0){
            return undefined;
        }
        const lastItem = this.arrayElements[this.length-1];
        delete this.arrayElements[this.length-1];
        this.length --;
        return lastItem;
    }
    deleteAtIndex(index){
        if(index >= this.length){
            return undefined;
        }
        const itemvalue = this.arrayElements[index]
        this.shiftIndex(index)
        return itemvalue;
    }

    shiftIndex(index){
        for(let i =index; i < this.length - 1; i++){
            let nextIndex = Number(i) + 1
           
            this.arrayElements[i] = this.arrayElements[nextIndex]
        }
        delete this.arrayElements[this.length-1];
        this.length --; 
    }

}



document.addEventListener("DOMContentLoaded", function() {
    let arrayObj = new myArray();

    function showArrayValue(index){
        let value = arrayObj.get(index)
        document.getElementById("arrayValue").innerHTML = JSON.stringify(value);
    }
    showArrayValue()

    // pushdata in array
    function pushdata(value){
        arrayObj.push(value)
        showArrayValue()
    }
    function popdata(){
        let lastItem= arrayObj.pop()
        showArrayValue();
        return lastItem;
    }
    function deleteAtIndex(index){
        let item= arrayObj.deleteAtIndex(index)
        showArrayValue();
        return item;
    }
    function setBlankFormField(inputId){
        document.getElementById(inputId).value=''
    }
    
    document.getElementById("pushdata").addEventListener('click',(e)=>{
        let pushDataValue = document.getElementById("fname").value;
        if(!pushDataValue){
            alert('Please give value');
            return false;
        }
        pushdata(document.getElementById("fname").value);
        setBlankFormField('fname')
    })

    document.getElementById("popdata").addEventListener('click',(e)=>{
        let a =popdata();
        setBlankFormField('removeFname')
        showArrayValue();
    })

    document.getElementById("deleteAtIndex").addEventListener('click',(e)=>{
        let deleteIndex = document.getElementById("removeFname").value;
        if(!deleteIndex){
            alert('Please give index value');
            return false;
        }
        deleteAtIndex(deleteIndex);
        showArrayValue();
        setBlankFormField('removeFname')
    })

});



