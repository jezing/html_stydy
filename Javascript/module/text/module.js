console.log(this);

if (true) {
    console.log(this);
}


(function() {
    console.log(this);
})()