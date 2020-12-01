join_array_1 = [];
function paraone() {
    for (j = 1; j<=6; j++) {
        display_array = [];
        input_text = document.getElementById("i"+j).value;
        join_array_1.push(input_text);
    }

    var add_dot = join_array_1  .join(".");
    console.log(add_dot);
    document.getElementById("display_tag").innerHTML=add_dot;
    
}

join_array_2 = [];
function paratwo () {
    for (l = 1; l<=6; l++) {
        display_array_2 = [];
        input_text_2 = document.getElementById("i1"+l).value;
        join_array_2.push(input_text_2);
    }

    var add_dot_2 = join_array_2.join(".");
    console.log(add_dot_2);
    document.getElementById("display_tag_2").innerHTML=add_dot_2;
    
}