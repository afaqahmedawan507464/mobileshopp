//product qty up and down funcation
let $qty_up = $(".qty .qty_up");
let $qty_down = $(".qty .qty_down");
// let $qty_input = $(".qty .qty_input");

$qty_up.click(function(e){
    $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if($qty_input.val()>=1 && $qty_input.val()<9){
        $qty_input.val(function(i,oldval){
            return ++oldval;
        });
    }
});
 $qty_down.click(function(e){
    $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if($qty_input.val()>1 && $qty_input.val()<=10){
        $qty_input.val(function(i,oldval){
            return --oldval;
        })
    }
 });