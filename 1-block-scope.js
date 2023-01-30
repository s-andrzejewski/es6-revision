// let cannot be redeclared - super feature (throws an error, which says that it's been already declared)
// mostly I will be using const

// functional scoping


// but theres also block scoping:
    const list = [1,2,3,4,5];

    for(let i = 0; i < list.length; i++) {
        console.log('let i:', i);
    }

    /* 
    console.log("and the i variable outside the scope is:", i);
    will give us an error, because i is only declared within the for {} scope
    */

    console.log("------------------------------")

    // every where you have curly brackets - there you have an another (new) scope

    // but only for let, because it's for declaring variable only in scope
    // var is for global variable declaring:
    for(var j = 0; j < list.length; j++) {
        console.log('var j:', j);
    }
    console.log("and the j variable outside the scope is:", j);     // output: and the j variable outside the scope is: 5
