//৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 

//১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 
 const addInput = () => {

    const getFirstInput = document.getElementById('input-one');
    const getSecondInput = document.getElementById('input-two');
    const getFirstInputValue = getFirstInput.value;
    const getSecondInputValue = getSecondInput.value;

    getFirstInput.value = "";
    getSecondInput.value = "";

    // display input
    displayInput(getFirstInputValue, getSecondInputValue);

    //got local storage
    getLocalStorage()

    addValueToStorage(getFirstInputValue, getSecondInputValue);
}



const displayInput = (getFirstInputValue, getSecondInputValue) => {

    const ul = document.getElementById('list-item');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    /* li.innerHTML = `
        <p>${getFirstInputValue} : <span>${getSecondInputValue}</span></p>
    ` */
    li1.innerText = getFirstInputValue;
    li2.innerText = getSecondInputValue;
    ul.appendChild(li1);
    ul.appendChild(li2);

}

const getLocalStorage = () => {
    const getLocalStorage = localStorage.getItem('newCart');
    let cartObj;
    if (getLocalStorage) {
        cartObj = JSON.parse(getLocalStorage);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addValueToStorage = (name, price) => {
    const newCart = getLocalStorage();
    newCart.name = name;
    newCart.price = price;
    const values = JSON.stringify(newCart);
    localStorage.setItem('newCart', values);

}

const displayLocalStorage = () => {
    const localStorage = getLocalStorage();
    for (const item in localStorage) {
        console.log(item);
        displayInput(item);
    }
}
displayLocalStorage()

