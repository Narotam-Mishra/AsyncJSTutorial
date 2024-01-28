function outer() {
    let i = 0;
    let j = [1,2,3];
    let k = "sanket"; // wont be using k inside inner

    function inner() {
        i += 1; // using i
        console.log(j);  // using j 
        return i;
    }

    i += 2;

    return inner;
    
}

x = outer();

x(); // 3
x(); // 4